import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const TeacherAnswerForm = props => {
	const { store, actions } = useContext(Context);
	const [question, setQuestion] = useState(null);
	const breathecodeId = parseInt(props.match.params.breathecode_id);

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
			<div className="row">
				<div className="col-lg-8 offset-lg-2 mt-3">
					{store.teacherQuestions &&
						store.teacherQuestions
							.filter(item => {
								if (question !== null && question.id === item.questionnarie_id) {
									return item;
								}
							})
							.map((item, index) => {
								return (
									<>
										<form
											onSubmit={e =>
												actions.submitTeacherAnswer(
													e,
													breathecodeId,
													item.id,
													item.questionnarie_id
												)
											}>
											<div className="form-group" key={index}>
												<label>{item.question}</label>
												<br />

												<textarea
													className="form-control"
													id="exampleFormControlTextarea1"
													rows="3"
													required
													onChange={e => actions.addTeacherAnswer(e.target.value)}
												/>
											</div>

											<button type="submit" className="submit btn btn-primary">
												Enviar
											</button>
										</form>
									</>
								);
							})}

					<br />
				</div>
			</div>
		</Fragment>
	);
};

TeacherAnswerForm.propTypes = {
	match: PropTypes.any
};

export default withRouter(TeacherAnswerForm);
