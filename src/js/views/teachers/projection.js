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
								{store.projectionQuestions.map((item, index) => {
									return (
										<div className="form-group" key={index}>
											<label>{item.question}</label>
											<br />
											<textarea
												className="form-control"
												id="exampleFormControlTextarea1"
												rows="3"
												required
											/>
										</div>
									);
								})}

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
