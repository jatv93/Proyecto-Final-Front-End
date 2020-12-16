import React, { Fragment, useContext, useEffect, useState } from "react";
import SideNav from "../../../component/sidenav";
import { Context } from "../../../store/appContext";
import "../../../../styles/teacherComments.scss";
import PropTypes from "prop-types";

export const TeacherComments = props => {
	const { store, actions } = useContext(Context);
	const [question, setQuestion] = useState(null);

	useEffect(() => {
		setQuestion(
			...store.teacherQuestionnaries.filter(item => {
				return item.name === props.match.params.question;
			}),
			[]
		);
	});
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
						<div className="col-lg-6 offset-lg-3">
							<h3 className="text-center">{!!question && question.name}</h3>
						</div>
						<div className="col-lg-10 offset-lg-1 pt-3 teacher-answers">
							{store.teacherQuestions.map((item, index) => {
								const answer = store.teacherAnswers.find(
									answer => answer.question_id == item.question_id
								);
								item.answer = answer ? answer.answer : null;
								return (
									<>
										<ul key={index}>
											<li>
												<h5>{item.question}</h5>
											</li>
										</ul>
										<p>{item.answer}</p>
									</>
								);
							})}
						</div>
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
