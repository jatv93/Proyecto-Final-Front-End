import React, { Fragment, useContext } from "react";
import { Context } from "../../../store/appContext";
import SideNav from "../../../component/sidenav";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import JobProfilePDF from "../../../component/jobProfilePDF";
import { PreviewPDF } from "../../../component/previewPDF";

export const StudentJobProfile = () => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<h1 className="text-center">Perfil Laboral</h1>
						</div>
					</div>
					<br />
					<div className="row">
						<h2 className="col-lg-12 text-center mb-3">Cuestionario Profesores</h2>
						{store.teacherQuestionnaries &&
							store.teacherQuestionnaries.map((questionnarie, index) => {
								return (
									<>
										<div className="col-lg-6" key={index}>
											<h3>{questionnarie.name}</h3>

											{store.teacherQuestions &&
												store.teacherQuestions
													.filter(item => {
														if (questionnarie.id === item.questionnarie_id) {
															return item;
														}
													})
													.map((item, index) => {
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
									</>
								);
							})}
					</div>
					<br />

					<div className="row">
						<h2 className="col-lg-12 text-center mb-3">Cuestionario Estudiantes</h2>
						{store.studentQuestionnaries &&
							store.studentQuestionnaries.map((questionnarie, index) => {
								return (
									<>
										<div className="col-lg-6" key={index}>
											<h3>{questionnarie.name}</h3>

											{store.studentQuestions &&
												store.studentQuestions
													.filter(item => {
														if (questionnarie.id === item.questionnarie_id) {
															return item;
														}
													})
													.map((item, index) => {
														const answer = store.studentAnswers.find(
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
									</>
								);
							})}
					</div>
					<div className="col-lg-6 offset-lg-3 text-center btn btn-outline-primary">
						<PDFDownloadLink document={<JobProfilePDF store={store} />} fileName="somename.pdf">
							{({ blob, url, loading, error }) => (loading ? "Loading document..." : "Descargar en PDF")}
						</PDFDownloadLink>
					</div>
				</div>
			</SideNav>
		</Fragment>
	);
};
