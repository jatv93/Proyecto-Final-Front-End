import React, { Fragment, useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";
import SideNav from "../../../component/sidenav";
import PropTypes from "prop-types";
import { QuestionnarieForm } from "../../../component/forms/questionnarieForm";

export const Questionnaries = () => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<h1 className="text-center">Cuestionarios</h1>
							<h3 className="text-center">Perfil Laboral</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6">
							<QuestionnarieForm
								list={store.teacherQuestionnaries && store.teacherQuestionnaries}
								title={"Cuestionarios de Profesores"}
								add={actions.addTeacherQuestionnarie}
								submit={actions.submitTeacherQuestionnarie}
								del={actions.deleteTeacherQuestionnarie}
								edit={actions.editTeacherQuestionnarie}
								update={actions.updateTeacherQuestionnarie}
							/>
						</div>
						<div className="col-lg-6">
							<QuestionnarieForm
								list={store.studentQuestionnaries && store.studentQuestionnaries}
								title={"Cuestionarios de Estudiantes"}
								add={actions.addStudentQuestionnarie}
								submit={actions.submitStudentQuestionnarie}
								del={actions.deleteStudentQuestionnarie}
								edit={actions.editStudentQuestionnarie}
								update={actions.updateStudentQuestionnarie}
							/>
						</div>
					</div>
				</div>
			</SideNav>
		</Fragment>
	);
};
