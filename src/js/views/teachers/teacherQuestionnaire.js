import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const teachform = () => {
	return (
		<Fragment>
			<div className="row">
				<h2 className="col-12 col-lg-6 col-md-6 col-sm-6 offset-lg-1 offset-md-1 offset-sm-1">Mark Otto</h2>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="align-middle text-center mt-5">
						<h1>Cuestionario</h1>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-8 col-md-8 col-sm-8 offset-lg-2 offset-md-2 offset-sm-2">
					<Link to="/teacher/questionnaire/strengths">
						<h3>Fortalezas</h3>
					</Link>
					<Link to="/teacher/questionnaire/weaknesses">
						<h3>Debilidades</h3>
					</Link>
					<Link to="/teacher/questionnaire/projection">
						<h3>Proyeccion de Estudiante</h3>
					</Link>
				</div>
			</div>
			<footer className="navFooter">
				<Link to="/teacher">
					<button className="btn btn-outline-danger my-2 my-sm-0" type="submit">
						Volver
					</button>
				</Link>

				<div className="form-inline">
					<Link to="/teacher/questionnaire">
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
							Next
						</button>
					</Link>
				</div>
			</footer>
		</Fragment>
	);
};
