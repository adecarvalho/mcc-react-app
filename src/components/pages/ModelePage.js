import React from 'react'

import { connect } from 'react-redux'
import { setModeleMcc } from '../../store/actions'

class ModelePage extends React.Component {
	state = {
		resistance_ra: '',
		coef_c0: '',
		coef_f: '',
		tension_uan: '',
		courant_ian: '',
		courant_ien: '',
		vitesse_nn: '',
		error: ''
	}

	onChangeHandler = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	isValidValue = val => {
		let txt = ''

		if (isNaN(val)) {
			txt = 'Nombre non valide'
			return txt
		}
		//
		if (val <= 0) {
			txt = 'Nombre négatif ou nul'
			return txt
		}

		return txt
	}

	onClickHandler = e => {
		//valeur ra
		let txt = this.isValidValue(this.state.resistance_ra)
		if (txt) {
			this.setState({
				error: 'Ra: ' + txt
			})
			return false
		} else {
			this.setState({
				error: ''
			})
		}
		//valeur C0
		txt = this.isValidValue(this.state.coef_c0)
		if (txt) {
			this.setState({
				error: 'C0: ' + txt
			})
			return false
		} else {
			this.setState({
				error: ''
			})
		}
		//valeur F
		txt = this.isValidValue(this.state.coef_f)
		if (txt) {
			this.setState({
				error: 'F: ' + txt
			})
			return false
		} else {
			this.setState({
				error: ''
			})
		}
		//valeur uan
		txt = this.isValidValue(this.state.tension_uan)
		if (txt) {
			this.setState({
				error: 'Uan: ' + txt
			})
			return false
		} else {
			this.setState({
				error: ''
			})
		}
		//valeur Ian
		txt = this.isValidValue(this.state.courant_ian)
		if (txt) {
			this.setState({
				error: 'Ian: ' + txt
			})
			return false
		} else {
			this.setState({
				error: ''
			})
		}
		//valeur Ien
		txt = this.isValidValue(this.state.courant_ien)
		if (txt) {
			this.setState({
				error: 'Ien: ' + txt
			})
			return false
		} else {
			this.setState({
				error: ''
			})
		}
		//valeur Nn
		txt = this.isValidValue(this.state.vitesse_nn)
		if (txt) {
			this.setState({
				error: 'Nn: ' + txt
			})
			return false
		} else {
			this.setState({
				error: ''
			})
		}
		//
		this.setState(
			{
				error: ''
			},
			() => {
				this.props.onsetModeleMcc(this.state)
				this.props.history.push('/mesure')
			}
		)
	}

	//
	render() {
		return (
			<div className="container">
				<div className="row ">
					<h3 className="center grey-text">Saisie du modèle de la Mcc</h3>
				</div>

				<div className="row">
					<div className="col s12 m9 offset-m2">
						<div className="card z-depth-3">
							<div className="card-content white-text">
								<form>
									{/* input ra*/}
									<div className="row">
										<div className="input-field col s12">
											<input
												onChange={this.onChangeHandler}
												value={this.state.resistance_ra}
												id="resistance_ra"
												type="text"
												required
												className="validate"
											/>
											<label htmlFor="resistance_ra">
												Ra Résistance d'induit
											</label>
										</div>
									</div>
									{/* */}
									<div className="row">
										{/* valeur C0*/}
										<div className="input-field col s6">
											<input
												onChange={this.onChangeHandler}
												value={this.state.coef_c0}
												id="coef_c0"
												type="text"
												required
												className="validate"
											/>
											<label htmlFor="coef_c0">C0[Nm] Couple de perte</label>
										</div>
										{/*valeur de f*/}
										<div className="input-field col s6">
											<input
												onChange={this.onChangeHandler}
												value={this.state.coef_f}
												id="coef_f"
												type="text"
												required
												className="validate"
											/>
											<label htmlFor="coef_f">F[Nms] Frottement</label>
										</div>
									</div>

									{/*valeurs nominales */}
									<div className="row">
										{/* valeur uan*/}
										<div className="input-field col s6">
											<input
												onChange={this.onChangeHandler}
												value={this.state.tension_uan}
												id="tension_uan"
												type="text"
												required
												className="validate"
											/>
											<label htmlFor="tension_uan">
												Uan[V] Tension d'induit nominale
											</label>
										</div>
										{/*valeua ian*/}
										<div className="input-field col s6">
											<input
												onChange={this.onChangeHandler}
												value={this.state.courant_ian}
												id="courant_ian"
												type="text"
												required
												className="validate"
											/>
											<label htmlFor="courant_ian">
												Ian[A] Courant d'induit nominal
											</label>
										</div>
									</div>
									{/*  */}
									<div className="row">
										{/* valeur ien*/}
										<div className="input-field col s6">
											<input
												onChange={this.onChangeHandler}
												value={this.state.courant_ien}
												id="courant_ien"
												type="text"
												required
												className="validate"
											/>
											<label htmlFor="courant_ien">
												Ien[mA] Courant d'excitation nominal
											</label>
										</div>
										{/*valeur nn*/}
										<div className="input-field col s6">
											<input
												onChange={this.onChangeHandler}
												value={this.state.vitesse_nn}
												id="vitesse_nn"
												type="text"
												required
												className="validate"
											/>
											<label htmlFor="vitesse_nn">
												Nn[tr/min] Vitesse de rotation nominale
											</label>
										</div>
									</div>

									{/*btn*/}
									<div className="row">
										<div className="col s3">
											<a
												onClick={this.onClickHandler}
												className="waves-effect waves-light btn  amber darken-3"
											>
												Enregister
											</a>
										</div>
										<div className="col s8 offset-s1">
											<span className="red-text">{this.state.error} </span>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onsetModeleMcc: mcc => dispatch(setModeleMcc(mcc))
	}
}

export default connect(
	null,
	mapDispatchToProps
)(ModelePage)
