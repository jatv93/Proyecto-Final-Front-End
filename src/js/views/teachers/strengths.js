import React, { Fragment, useContext } from "react";
import SideNav from "../../component/sidenav";
import { Context } from "../../store/appContext";

export const studentStrength = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.teacher}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<h1 className="text-center">Fortalezas</h1>
							<h3 className="text-center">Mark Otto</h3>
						</div>
					</div>
					<br />

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
			</SideNav>
		</Fragment>
	);
};
