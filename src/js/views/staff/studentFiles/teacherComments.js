import React, { Fragment, useContext } from "react";
import SideNav from "../../../component/sidenav";
import { Context } from "../../../store/appContext";

export const TeacherComments = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<h1 className="text-center">Comentarios del Profesor/Ayudante</h1>
						</div>
					</div>
				</div>
			</SideNav>
		</Fragment>
	);
};
