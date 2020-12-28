import React, { Fragment, useContext, useEffect, useState } from "react";
import SideNav from "../../../component/sidenav";
import { Context } from "../../../store/appContext";
import "../../../../styles/teacherComments.scss";
import PropTypes from "prop-types";

export const TeacherComments = props => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2">
							<h1 className="text-center">Comentarios del Profesor/Ayudante</h1>
						</div>
					</div>

					<br />
					<div className="row">
						{store.teacherQuestionnaries.map((questionnarie, index) => {
							return (
								<>
									<div className="col-lg-6 offset-lg-3" key={index}>
										<h3 className="text-center">{questionnarie.name}</h3>
									</div>
									<div className="col-lg-10 offset-lg-1 pt-3">
										{store.teacherQuestions
											.filter(item => {
												if (questionnarie.id === item.questionnarie_id) {
													return item;
												}
											})
											.map((item, index) => {
												const answer = store.teacherAnswers.find(
													answer => answer.question_id == item.id
												);
												item.answer = answer ? answer.answer : null;

												return (
													<>
														<ul key={index}>
															<li>
																<h5>{item.question}</h5>
															</li>
															<p>{item.answer}</p>
														</ul>
													</>
												);
											})}
									</div>
								</>
							);
						})}
					</div>

					<br />
					<br />
				</div>
			</SideNav>
		</Fragment>
	);
};

TeacherComments.propTypes = {
	match: PropTypes.anyw
};
