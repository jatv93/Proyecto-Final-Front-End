import React, { Fragment, useContext } from "react";
import PersonalDataForm from "../../../component/forms/personalDataForm";
import SideNav from "../../../component/sidenav";
import { Context } from "../../../store/appContext";

export const StudentProfile = () => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<PersonalDataForm />
				</div>
			</SideNav>
		</Fragment>
	);
};
