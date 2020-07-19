import React, { Fragment, useContext } from "react";
import SideNav from "../../../component/sidenav";
import { Context } from "../../../store/appContext";
import "../../../../styles/teacherComments.scss";

export const TeacherComments = () => {
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
						<div className="col-lg-6 offset-lg-3">
							<h3 className="text-center pb-2">Fortalezas</h3>
						</div>
						<div className="col-lg-10 offset-lg-1 pt-3 teacher-answers">
							{store.strengthQuestions.map((item, index) => {
								const answer = store.strengthAnswers.find(
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
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<h3 className="text-center pb-2">Debilidades</h3>
						</div>
						<div className="col-lg-10 offset-lg-1 pt-3 teacher-answers">
							{store.weaknessQuestions.map((item, index) => {
								const answer = store.weaknessAnswers.find(
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
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<h3 className="text-center pb-2">Proyección del Estudiante</h3>
						</div>
						<div className="col-lg-10 offset-lg-1 pt-3 teacher-answers">
							{store.projectionQuestions.map((item, index) => {
								const answer = store.projectionAnswers.find(
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
				</div>
			</SideNav>
		</Fragment>
	);
};
