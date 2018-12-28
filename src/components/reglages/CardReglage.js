import React from 'react'
import PropTypes from 'prop-types'

const CardReglage = props => {
	const { min, max, step, titre, valeur, onChangeValeur } = props

	return (
		<div className="card z-depth-2">
			<div className="card-content">
				<span className="card-title center grey-text text-darken-2">
					{titre}
				</span>

				<div className="range-field">
					<input
						onChange={onChangeValeur}
						type="range"
						name="volume"
						min={min}
						max={max}
						value={valeur}
						step={step}
					/>
				</div>
			</div>
			<div className="card-action">
				<span className="teal-text">
					<i className="material-icons left">network_check</i>
					{`${valeur}`}
				</span>
			</div>
		</div>
	)
}

CardReglage.propTypes = {
	min: PropTypes.number.isRequired,
	max: PropTypes.number.isRequired,
	step: PropTypes.number.isRequired,
	titre: PropTypes.string.isRequired,
	valeur: PropTypes.string.isRequired,
	onChangeValeur: PropTypes.func.isRequired
}

export default CardReglage
