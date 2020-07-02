import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const teachform = () => {
	return (
		<Fragment>
			<nav className="navbar navbar-light bg-white mb-3">
				<h2 className="navbar-brand mb-0 h1">Mark Otto</h2>
			</nav>
			<div className="row">
				<div className="col-12">
					<div className="align-middle text-center mt-5">
						<h1>Cuestionario</h1>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-8 offset-md-1">
					<Link to="/teacher/questionnaire/strengths">
						<h3>Fortalezas</h3>
					</Link>
					<Link to="/teacher/questionnaire/weaknesses">
						<h3>Debilidades</h3>
					</Link>
					<Link to="/teacher">
						<h3>Proyeccion de Estudiante</h3>
					</Link>
				</div>
			</div>
			<footer className="navFooter">
				<button className="btn btn-outline-danger my-2 my-sm-0" type="submit">
					Volver
				</button>
				<div className="form-inline">
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
						Next
					</button>
				</div>
			</footer>
		</Fragment>
	);
};
