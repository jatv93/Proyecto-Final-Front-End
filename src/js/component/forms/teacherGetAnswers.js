import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const TeacherGetAnswers = props => {
	const { store } = useContext(Context);
	const [question, setQuestion] = useState([]);

	useEffect(() => {
		setQuestion(
			...store.teacherQuestionnaries.filter(item => {
				return item.name === props.match.params.question;
			}),
			[]
		);
	});

	console.log(store.teacherQuestionnaries);

	return (
		<Fragment>
			<div className="row">
				<div className="col-lg-10 offset-lg-1 pt-3">
					{store.teacherQuestions &&
						store.teacherQuestions
							.filter(item => {
								if (question !== null && question.id === item.questionnarie_id) {
									return item;
								}
							})
							.map((item, index) => {
								const answer = store.teacherAnswers.find(answer => answer.question_id == item.id);
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
			</div>
		</Fragment>
	);
};

TeacherGetAnswers.propTypes = {
	match: PropTypes.any
};

export default withRouter(TeacherGetAnswers);
