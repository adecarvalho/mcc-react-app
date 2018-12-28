import React from 'react'
import CardMesure from './CardMesure'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Mesures extends React.Component {
	//
	static propTypes = {
		mesures: PropTypes.shape({
			ia: PropTypes.string.isRequired,
			vitesse: PropTypes.string.isRequired,
			p1: PropTypes.string.isRequired,
			p2: PropTypes.string.isRequired
		}).isRequired
	}

	render() {
		const { ia, vitesse, p1, p2 } = this.props.mesures
		return (
			<div className="fluid">
				<div className="row">
					<div className="col s12 m5">
						<CardMesure color={'#ffb74d'} max={10} value={ia} label={'Ia[A]'} />
					</div>

					<div className="col  s12 m5 offset-m1">
						<CardMesure
							color={'#ffb74d'}
							max={3000}
							value={vitesse}
							label={'Vitesse[tr/min]'}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col s12 m5">
						<CardMesure
							color={'#ffb74d'}
							max={2000}
							value={p1}
							label={'Puissance Abs[W]'}
						/>
					</div>

					<div className="col s12 m5 offset-m1">
						<CardMesure
							color={'#ffb74d'}
							max={2000}
							value={p2}
							label={'Puissance Utile [W]'}
						/>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		mesures: state.mesures
	}
}

export default connect(mapStateToProps)(Mesures)
