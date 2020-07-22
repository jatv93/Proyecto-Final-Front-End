import React, { Fragment, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";
import "../../../styles/teacherComments.scss";

export const StrengthQuestions = () => {
	const { store, actions } = useContext(Context);
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<Fragment>
			<Modal show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton onClick={() => setModalShow(false)}>
					<Modal.Title id="contained-modal-title-vcenter">Añadir Nueva Pregunta</Modal.Title>
				</Modal.Header>
				<form onSubmit={e => actions.submitTeacherStrengthQuestion(e)}>
					<Modal.Body>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
							required
							onChange={e => actions.addTeacherStrengthQuestion(e.target.value)}
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
				<div className="col-lg-9 offset-lg-1 mt-3">
					<h4>Fortalezas</h4>
					{store.strengthQuestions.map((item, index) => {
						return (
							<ul key={index}>
								<li>
									{item.question}
									<FontAwesomeIcon icon={faEdit} className="ml-2 mr-2" />

									<FontAwesomeIcon
										icon={faTrash}
										className="mr-2"
										onClick={() => actions.deleteTeacherStrengthQuestion(index)}
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
				</div>
			</div>
			<div className="row">
				<div className="col-lg-6 offset-lg-3 text-center">
					<Button variant="btn btn-outline-primary" onClick={() => setModalShow(true)}>
						<FontAwesomeIcon icon={faPlus} className="mr-2" />
						Añadir Pregunta
					</Button>
				</div>
			</div>
		</Fragment>
	);
};

StrengthQuestions.propTypes = {
	onHide: PropTypes.any
};
