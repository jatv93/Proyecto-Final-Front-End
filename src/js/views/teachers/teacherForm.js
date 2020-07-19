import React, { Fragment, useContext } from "react";
import { Context } from "../../store/appContext";
import SideNav from "../../component/sidenav";
import { Link } from "react-router-dom";

export const teachform = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.teacher}>
				<div className="row">
					<div className="col-lg-12">
						<div className="align-middle text-center mt-2">
							<h1>Cuestionario</h1>
							<h3>Mark Otto</h3>
						</div>
					</div>
				</div>
				<br />

				<div className="row">
					<div className="col-8 offset-md-1">
						<Link to={"/teacher/:breathecode_id/form/strengths"}>
							<h3>Fortalezas</h3>
						</Link>
						<br />
						<Link to={"/teacher/:breathecode_id/form/weaknesses"}>
							<h3>Debilidades</h3>
						</Link>
						<br />
						<Link to={"/teacher/:breathecode_id/form/projection"}>
							<h3>Proyección del Estudiante</h3>
						</Link>
					</div>
				</div>
			</SideNav>
		</Fragment>
	);
};
