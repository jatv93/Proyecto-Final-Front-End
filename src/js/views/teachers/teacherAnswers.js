import React, { Fragment, useContext, useEffect, useState } from "react";
import SideNav from "../../component/sidenav";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import TeacherAnswerForm from "../../component/forms/teacherAnswerForm";
import TeacherGetAnswers from "../../component/forms/teacherGetAnswers";

export const TeacherAnswers = props => {
	const { store, actions } = useContext(Context);
	const [studentFile, setStudentFile] = useState({});
	const [questionnarie, setQuestionnarie] = useState(null);
	const [msg, setMsg] = useState({ alert: false, type: "", comp: null });

	useEffect(() => {
		setStudentFile(
			store.filesDataTable.filter(item => {
				return item.breathecode_id === parseInt(props.match.params.breathecode_id);
			})[0]
		);

		setQuestionnarie(
			...store.teacherQuestionnaries.filter(item => {
				return item.name === props.match.params.question;
			}),
			[]
		);

		getAnswer();
	}, []);

	const getAnswer = async () => {
		let token = sessionStorage.getItem("data");
		const options = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};

		const resp = await fetch(
			"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/teacher_answers",
			options
		);
		const data = await resp.json();
		const answer = data.data;
		const question = store.teacherQuestions;

		question.map(item => {
			answer.map(answer => {
				if (item.id === answer.question_id) {
					setMsg({
						alert: true,
						type: "error",
						comp: <TeacherGetAnswers />
					});
				} else
					setMsg({
						alert: true,
						type: "success",
						comp: <TeacherAnswerForm />
					});
			});
		});
	};

	return (
		<Fragment>
			<SideNav links={store.sideBarContent.teacher}>
				<div className="container">
					{!!questionnarie && (
						<>
							<div className="row">
								<div className="col-lg-6 offset-lg-3">
									<h1 className="text-center">{!!questionnarie && questionnarie.name}</h1>
									<h3 className="text-center">{studentFile.name + " " + studentFile.lastName}</h3>
								</div>
							</div>

							{msg.comp}
						</>
					)}
				</div>
			</SideNav>
		</Fragment>
	);
};

TeacherAnswers.propTypes = {
	match: PropTypes.any
};
