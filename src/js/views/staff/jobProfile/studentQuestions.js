import React, { Fragment, useContext } from "react";
import { Context } from "../../../store/appContext";
import SideNav from "../../../component/sidenav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

export const StudentQuestions = () => {
	const { store, actions } = useContext(Context);
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<>
			<Modal show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton onClick={() => setModalShow(false)}>
					<Modal.Title id="contained-modal-title-vcenter">Añadir Nueva Pregunta</Modal.Title>
				</Modal.Header>
				<form onSubmit={e => actions.submitStudentQuestion(e)}>
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
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<h1 className="text-center">Cuestionario Estudiantes</h1>
							<h3 className="text-center">Perfil Laboral</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-9 offset-lg-1 mt-3">
							{store.jobProfileStudentQuestions.map((item, index) => {
								return (
									<ul key={index}>
										<li>
											{item.question}
											<FontAwesomeIcon icon={faEdit} className="ml-2 mr-2" />

											<FontAwesomeIcon
												icon={faTrash}
												className="mr-2"
												onClick={() => actions.deleteStudentQuestion(index)}
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
								<Button variant="btn btn-outline-primary" onClick={() => setModalShow(true)}>
									<FontAwesomeIcon icon={faPlus} className="mr-2" />
									Añadir Pregunta
								</Button>
							</div>
						</div>
					</div>
				</div>
			</SideNav>
		</>
	);
};

StudentQuestions.propTypes = {
	onHide: PropTypes.any
};
