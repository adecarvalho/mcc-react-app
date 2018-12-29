import React from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { RadialGauge } from 'react-canvas-gauges'

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
					<div className="col s12 m5 offset-m1">
						<RadialGauge
							units="A"
							width={350}
							height={350}
							title="Ia"
							value={ia}
							minValue={0}
							maxValue={10}
							majorTicks={['0', '2', '4', '6', '8', '10']}
							minorTicks={10}
							highlights={[{ from: 0, to: 10, color: 'rgba(96,164,153,.7)' }]}
						/>
					</div>

					<div className="col  s12 m5 offset-m1">
						<RadialGauge
							units="tr/min"
							width={350}
							height={350}
							title="Vitesse"
							value={vitesse}
							minValue={0}
							maxValue={3000}
							majorTicks={['0', '500', '1000', '1500', '2000', '2500', '3000']}
							// minorTicks={500}
							highlights={[{ from: 0, to: 3000, color: 'rgba(96,164,153,.7)' }]}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col s12 m5 offset-m1">
						<RadialGauge
							units="W"
							width={350}
							height={350}
							title="P abs"
							value={p1}
							minValue={0}
							maxValue={3000}
							majorTicks={['0', '500', '1000', '1500', '2000', '2500', '3000']}
							// minorTicks={500}
							highlights={[{ from: 0, to: 3000, color: 'rgba(96,164,153,.7)' }]}
						/>
					</div>

					<div className="col s12 m5 offset-m1">
						<RadialGauge
							units="W"
							width={350}
							height={350}
							title="P utile"
							value={p2}
							minValue={0}
							maxValue={3000}
							majorTicks={['0', '500', '1000', '1500', '2000', '2500', '3000']}
							// minorTicks={500}
							highlights={[{ from: 0, to: 3000, color: 'rgba(96,164,153,.7)' }]}
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
