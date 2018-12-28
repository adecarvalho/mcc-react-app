import React from 'react'
import img_mcc from '../../images/Modele_mcc.svg'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row  s12 m8">
					<h2 className="center grey-text">
						Simulation d'une Machine à Courant Continu
					</h2>
				</div>

				<div className="row">
					<div className="col s12 m7 offset-m3">
						<div className="card z-depth-3">
							<div className="card-image">
								<img src={img_mcc} alt="mcc_image" />
								<span className="card-title grey-text">Modèle d'une Mcc</span>
								<Link
									to="/modele"
									className="btn-floating halfway-fab waves-effect waves-light amber darken-3"
								>
									<i className="material-icons">edit</i>
								</Link>
							</div>
							<div className="card-content">
								<p>
									Application Web pour la simulation d'une Mcc à excitation
									séparée.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default HomePage
