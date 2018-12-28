import { SET_MODELE_MCC, SET_NEW_REGLAGE } from './types'

export const setModeleMcc = modele_mcc => {
	return {
		type: SET_MODELE_MCC,
		payload: modele_mcc
	}
}

export const setNewReglage = reglage => {
	return {
		type: SET_NEW_REGLAGE,
		payload: reglage
	}
}
