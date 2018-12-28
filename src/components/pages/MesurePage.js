import React from 'react'
import Reglages from '../reglages/Reglages'
import Mesures from '../mesures/Mesures'

class MesurePage extends React.Component {
	render() {
		return (
			<div className="fluid">
				<div className="row">
					<h3 className="center grey-text">Réglages et Mesures</h3>
				</div>

				<Reglages />

				<Mesures />
			</div>
		)
	}
}

export default MesurePage
