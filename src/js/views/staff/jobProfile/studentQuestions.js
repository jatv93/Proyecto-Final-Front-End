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

	function AddQuestionModal(props) {
		return (
			<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Añadir Nueva Pregunta</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required />
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Guardar</Button>
				</Modal.Footer>
			</Modal>
		);
	}

	return (
		<Fragment>
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
											<FontAwesomeIcon icon={faTrash} className="mr-2" />
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

							<AddQuestionModal show={modalShow} onHide={() => setModalShow(false)} />
						</div>
					</div>
				</div>
			</SideNav>
		</Fragment>
	);
};

StudentQuestions.propTypes = {
	onHide: PropTypes.any
};
