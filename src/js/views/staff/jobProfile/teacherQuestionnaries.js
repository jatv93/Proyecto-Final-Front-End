import React, { Fragment, useContext } from "react";
import { Context } from "../../../store/appContext";
import SideNav from "../../../component/sidenav";
import { TeacherQuestions } from "../../../component/forms/teacherQuestions";

export const TeacherQuestionnaries = () => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<h1 className="text-center">Cuestionario Profesores</h1>
							<h3 className="text-center">Perfil Laboral</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6">
							<TeacherQuestions />
						</div>
					</div>
				</div>
			</SideNav>
		</Fragment>
	);
};
