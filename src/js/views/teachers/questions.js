import React, { Fragment, useContext, useEffect, useState } from "react";
import SideNav from "../../component/sidenav";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";

export const teacherAnswers = props => {
	const { store, actions } = useContext(Context);
	const [studentFile, setStudentFile] = useState({});
	const [question, setQuestion] = useState(null);

	useEffect(() => {
		setStudentFile(
			store.filesDataTable.filter(item => {
				return item.breathecode_id === parseInt(props.match.params.breathecode_id);
			})[0]
		);

		setQuestion(
			...store.teacherQuestionnaries.filter(item => {
				return item.name === props.match.params.question;
			}),
			[]
		);
	});
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.teacher}>
				<div className="container">
					{!!question && (
						<>
							<div className="row">
								<div className="col-lg-6 offset-lg-3">
									<h1 className="text-center">{!!question && question.name}</h1>
									<h3 className="text-center">{studentFile.name + " " + studentFile.lastName}</h3>
								</div>
							</div>

							<div className="row">
								<div className="col-lg-8 offset-lg-2 mt-3">
									{store.teacherQuestions &&
										store.teacherQuestions
											.filter(item => {
												if (question.id === item.questionnarie_id) {
													return item;
												}
											})
											.map((item, index) => {
												return (
													<div className="form-group" key={index}>
														<label>{item.question}</label>
														<br />
														<textarea
															className="form-control"
															id="exampleFormControlTextarea1"
															rows="3"
															required
														/>
													</div>
												);
											})}
									<button type="submit" className="submit btn btn-primary">
										Enviar
									</button>
									<br />
								</div>
							</div>
						</>
					)}
				</div>
			</SideNav>
		</Fragment>
	);
};

teacherAnswers.propTypes = {
	match: PropTypes.any
};
