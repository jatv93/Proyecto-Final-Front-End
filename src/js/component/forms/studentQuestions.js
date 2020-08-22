import React, { Fragment, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus, faBolt } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";
import "../../../styles/teacherQuestions.scss";

export const StudentQuestions = () => {
	const { store, actions } = useContext(Context);
	const [modalShow, setModalShow] = React.useState(false);
	const [questionnarie_id, setQuestionnarie_id] = useState(0);

	return (
		<Fragment>
			<Modal show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton onClick={() => setModalShow(false)}>
					<Modal.Title id="contained-modal-title-vcenter">Añadir Nueva Pregunta</Modal.Title>
				</Modal.Header>
				<form onSubmit={e => actions.submitStudentQuestion(e, questionnarie_id)}>
					<Modal.Body>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
							required
							onChange={e => actions.addStudentQuestion(e.target.value)}
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button type="submit" onClick={() => setModalShow(false)}>
							Guardar
						</Button>
					</Modal.Footer>
				</form>
			</Modal>

			<div className="row">
				{store.studentQuestionnaries &&
					store.studentQuestionnaries.map((questionnarie, index) => {
						return (
							<>
								<div className="col-lg-12 mt-3" key={index}>
									<h4 className="text-center mb-3">{questionnarie.name}</h4>

									{store.studentQuestions &&
										store.studentQuestions.map((item, index) => {
											return (
												<ul key={index}>
													<li>
														{item.question}
														<FontAwesomeIcon icon={faEdit} className="ml-2 mr-2" />

														<FontAwesomeIcon
															icon={faTrash}
															className="mr-2"
															onClick={() => actions.deleteTeacherQuestion(id)}
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

StudentQuestions.propTypes = {
	onHide: PropTypes.any
};
