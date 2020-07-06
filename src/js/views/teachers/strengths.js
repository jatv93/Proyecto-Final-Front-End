import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const studentStrength = () => {
	return (
		<Fragment>
			<nav className="navbar navbar-light bg-white mb-3 lg-3">
				<h2 className="navbar-brand mb-0 h1">Mark Otto</h2>
			</nav>
			<div className="container">
				<div className="row pb-5">
					<div className="col-lg-6 offset-lg-3">
						<h1 className="text-center">Fortalezas</h1>
					</div>
				</div>

				<div className="row">
					<div className="col-12 col-lg-10 offset-lg-1">
						<form>
							<div className="form-group">
								<label>¿Qué hace a este estudiante mejor que los otros?</label>
								<br />
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
							</div>

							<div className="form-group">
								<label>¿Qué está haciendo muy bien?</label>
								<br />
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
							</div>
							<div className="form-group">
								<label>¿Habilidades más asombrosas?</label>
								<br />
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
							</div>
							<div className="form-group">
								<label>¿Qué dicen los demás que él/ella hace muy bien?</label>
								<br />
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
							</div>

							<button type="submit" className="submit btn btn-primary">
								Enviar
							</button>
						</form>
					</div>
				</div>
			</div>
			<footer className="navFooter">
				<Link to="/teacher/questionnaire">
					<button className="btn btn-outline-danger my-2 my-sm-0" type="submit">
						Volver
					</button>
				</Link>

				<div className="form-inline">
					<Link to="/teacher/questionnaire/weaknesses">
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
							Next
						</button>
					</Link>
				</div>
			</footer>
		</Fragment>
	);
};
