import { SET_MODELE_MCC, SET_NEW_REGLAGE } from './types'

const initState = {
	modeleMcc: {
		resistance_ra: '',
		coef_c0: '',
		coef_f: '',
		tension_uan: '',
		courant_ian: '',
		courant_ien: '',
		vitesse_nn: ''
	},
	reglages: { ua: '0', ie: '240', cr: '0' },
	mesures: {
		ia: '0',
		vitesse: '0',
		p1: '0',
		p2: '0'
	}
}

const process = (mcc, reglage) => {
	if (mcc && reglage) {
		const res = {}

		const ua = Number(reglage.ua)
		const ie = Number(reglage.ie)
		const cr = Number(reglage.cr)

		const ra = Number(mcc.resistance_ra)
		const c0 = Number(mcc.coef_c0)
		const f = Number(mcc.coef_f)

		const uan = Number(mcc.tension_uan)
		const ian = Number(mcc.courant_ian)
		const ien = Number(mcc.courant_ien)
		const nn = Number(mcc.vitesse_nn)

		const omega_n = (2 * Math.PI * nn) / 60
		const kphi_n = (uan - ra * ian) / omega_n

		const kphi = (kphi_n * ie) / ien || 0

		const num = ua * f + (c0 + cr) * kphi
		const den = ra * f + kphi * kphi

		//ia
		let ia = num / den || 0
		if (ia < 0 || ua <= 0) {
			ia = 0
		}

		//vitesse
		let omega = (ua - ra * ia) / kphi || 0
		if (omega < 0) omega = 0

		const vitesse = (omega * 60) / (2 * Math.PI)

		const p1 = ua * ia
		const p2 = cr * omega

		//
		res.ia = ia.toFixed(2)
		res.vitesse = vitesse.toFixed(0)
		res.p1 = p1.toFixed(0)
		res.p2 = p2.toFixed(0)

		return res
	}
}

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		//
		case SET_MODELE_MCC: {
			const res = process(action.payload, state.reglages)

			return {
				...state,
				modeleMcc: { ...action.payload },
				mesures: { ...res }
			}
		}
		//
		case SET_NEW_REGLAGE: {
			const res = process(state.modeleMcc, action.payload)
			//
			return {
				...state,
				reglages: { ...action.payload },
				mesures: { ...res }
			}
		}
		//
		default:
			return state
	}
}

export default rootReducer
