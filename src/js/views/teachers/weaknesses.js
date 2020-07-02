import React, { Fragment } from "react";

export const studentWeakness = () => {
	return (
		<Fragment>
			<nav className="navbar navbar-light bg-white mb-3">
				<h2 className="navbar-brand mb-0 h1">Mark Otto</h2>
			</nav>
			<div className="container">
				<div className="row pb-5">
					<div className="col-lg-6 offset-lg-3">
						<h1 className="align-top text-center">Debilidades</h1>
					</div>
				</div>

				<div className="row">
					<div className="col-12 col-lg-10 offset-md-1">
						<form>
							<div className="form-group">
								<label>¿Qué puede mejorar el estudiante?</label>
								<br />
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
							</div>

							<div className="form-group">
								<label>¿De qué formas no es eficiente?</label>
								<br />
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
							</div>
							<div className="form-group">
								<label>¿Qué no está haciendo bien?</label>
								<br />
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
							</div>
							<div className="form-group">
								<label>¿Qué es lo que definitivamente no va a hacer muy bien?</label>
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
