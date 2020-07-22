import React, { Fragment, useContext } from "react";
import { Context } from "../../../store/appContext";
import SideNav from "../../../component/sidenav";
import PropTypes from "prop-types";
import { StrengthQuestions } from "../../../component/forms/strengthQuestions";
import { WeaknessQuestions } from "../../../component/forms/weaknessQuestions";
import { ProjectionQuestions } from "../../../component/forms/projectionQuestions";

export const TeacherQuestions = () => {
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
					<StrengthQuestions />
					<WeaknessQuestions />
					<ProjectionQuestions />
				</div>
			</SideNav>
		</Fragment>
	);
};

TeacherQuestions.propTypes = {
	onHide: PropTypes.any
};
