import React, { Fragment, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus, faBolt } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";
import "../../../styles/teacherQuestions.scss";
import { useEffect } from "react";

export const TeacherQuestions = () => {
	const { store, actions } = useContext(Context);
	const [modalShow, setModalShow] = React.useState(false);
	const [modalShow1, setModalShow1] = React.useState(false);
	const [question_id, setQuestion_id] = useState(0);
	const [questionnarie_id, setQuestionnarie_id] = useState(0);

	return (
		<Fragment>
			<Modal show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton onClick={() => setModalShow(false)}>
					<Modal.Title id="contained-modal-title-vcenter">Añadir Nueva Pregunta</Modal.Title>
				</Modal.Header>
				<form onSubmit={e => actions.submitTeacherQuestion(e, questionnarie_id)} className="was-validated">
					<Modal.Body>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
							required
							onChange={e => actions.addTeacherQuestion(e.target.value)}
						/>
						<div className="valid-feedback">Válido</div>
						<div className="invalid-feedback">Por favor complete este campo.</div>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={() => setModalShow(false)}>Cerrar</Button>
						<Button type="submit" onClick={() => setModalShow(false)}>
							Guardar
						</Button>
					</Modal.Footer>
				</form>
			</Modal>

			<Modal show={modalShow1} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton onClick={() => setModalShow1(false)}>
					<Modal.Title id="contained-modal-title-vcenter">Editar Pregunta</Modal.Title>
				</Modal.Header>

				<form onSubmit={e => actions.updateTeacherQuestion(e, question_id)} className="was-validated">
					<Modal.Body>
						<div className="form-group">
							<textarea
								className="form-control"
								id="exampleFormControlTextarea1"
								rows="3"
								required
								onChange={e => actions.editTeacherQuestion(e.target.value)}
							/>
							<div className="valid-feedback">Válido</div>
							<div className="invalid-feedback">Por favor complete este campo.</div>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={() => setModalShow1(false)}>Cerrar</Button>
						<Button type="submit" onClick={() => setModalShow1(false)}>
							Guardar
						</Button>
					</Modal.Footer>
				</form>
			</Modal>

			<div className="row">
				{store.teacherQuestionnaries &&
					store.teacherQuestionnaries.map((questionnarie, index) => {
						return (
							<>
								<div className="col-lg-5 mt-3" key={index}>
									<h4 className="text-center">{questionnarie.name}</h4>

									{store.teacherQuestions &&
										store.teacherQuestions
											.filter(item => {
												if (questionnarie.id === item.questionnarie_id) {
													return item;
												}
											})
											.map((item, index) => {
												return (
													<ul key={index}>
														<li>
															{item.question}
															<FontAwesomeIcon
																icon={faEdit}
																className="ml-2 mr-2"
																onClick={() => {
																	setModalShow1(true);
																	setQuestion_id(item.id);
																	console.log(item.id);
																}}
															/>

															<FontAwesomeIcon
																icon={faTrash}
																className="mr-2"
																onClick={() => actions.deleteTeacherQuestion(item.id)}
															/>

															<input
																className="form-check-input-inline"
																type="checkbox"
																id="inlineCheckbox1"
																value="option1"
															/>
														</li>
													</ul>
												);
											})}

									<br />
									<div className="col-lg-6 offset-lg-3 text-center">
										<Button
											variant="btn btn-outline-primary"
											onClick={() => {
												setModalShow(true);
												setQuestionnarie_id(questionnarie.id);
											}}>
											<FontAwesomeIcon icon={faPlus} className="mr-2" />
											Añadir Pregunta
										</Button>
									</div>
								</div>
							</>
						);
					})}
			</div>
		</Fragment>
	);
};

TeacherQuestions.propTypes = {
	onHide: PropTypes.any
};
