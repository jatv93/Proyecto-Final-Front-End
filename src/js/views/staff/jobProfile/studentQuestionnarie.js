import React, { Fragment, useContext } from "react";
import { Context } from "../../../store/appContext";
import SideNav from "../../../component/sidenav";
import { StudentQuestions } from "../../../component/forms/studentQuestions";

export const StudentQuestionnaries = () => {
	const { store, actions } = useContext(Context);
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<h1 className="text-center">Cuestionario Estudiantes</h1>
						</div>
					</div>

					<StudentQuestions />
				</div>
			</SideNav>
		</Fragment>
	);
};
