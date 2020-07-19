import React, { Fragment, useContext } from "react";
import { Context } from "../../store/appContext";
import SideNav from "../../component/sidenav";

export const studentProjection = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.teacher}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<h1 className="text-center">Proyección del Estudiante</h1>
							<h3 className="text-center">Mark Otto</h3>
						</div>
					</div>
					<br />

					<div className="row">
						<div className="col-12 col-lg-10 offset-lg-1">
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
			</SideNav>
		</Fragment>
	);
};
