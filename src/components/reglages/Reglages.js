import React from 'react'
import CardReglage from './CardReglage'
import { connect } from 'react-redux'

import { setNewReglage } from '../../store/actions'
//
class Reglages extends React.Component {
	state = {
		ua: '0',
		ie: '240',
		cr: '0'
	}
	//
	onChangeTension = e => {
		const tension = e.target.value

		this.setState(
			{
				ua: tension
			},
			() => {
				this.props.onSetNewReglage(this.state)
			}
		)
	}
	onChangeCourant = e => {
		const courant = e.target.value

		this.setState(
			{
				ie: courant
			},
			() => {
				this.props.onSetNewReglage(this.state)
			}
		)
	}
	onChangeCouple = e => {
		const couple = e.target.value

		this.setState(
			{
				cr: couple
			},
			() => {
				this.props.onSetNewReglage(this.state)
			}
		)
	}

	render() {
		return (
			<div className="fluid">
				<div className="row">
					{/* reglage tension ua */}
					<div className="col s12 m4">
						<CardReglage
							valeur={this.state.ua}
							onChangeValeur={this.onChangeTension}
							min={0}
							max={220}
							step={5}
							titre={'Tension Ua[V] '}
						/>
					</div>

					{/* reglage courant ie */}
					<div className="col s12 m4">
						<CardReglage
							valeur={this.state.ie}
							onChangeValeur={this.onChangeCourant}
							min={10}
							max={240}
							step={5}
							titre={'Courant Ie [mA]'}
						/>
					</div>

					{/* reglage couple charge*/}
					<div className="col s12 m4">
						<CardReglage
							valeur={this.state.cr}
							onChangeValeur={this.onChangeCouple}
							min={0}
							max={5}
							step={0.1}
							titre={'Couple Cr[Nm]'}
						/>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSetNewReglage: reglage => dispatch(setNewReglage(reglage))
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Reglages)
