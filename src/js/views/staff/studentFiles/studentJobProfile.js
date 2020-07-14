import React, { Fragment, useContext } from "react";
import { Context } from "../../../store/appContext";
import SideNav from "../../../component/sidenav";

export const StudentJobProfile = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<h1 className="text-center">Perfil Laboral</h1>
						</div>
					</div>
				</div>
			</SideNav>
		</Fragment>
	);
};
