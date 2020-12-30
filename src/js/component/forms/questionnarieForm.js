import React, { Fragment, useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";
import "../../../styles/teacherComments.scss";

export const QuestionnarieForm = ({ list, title, add, submit, del, edit, update }) => {
	const { store, actions } = useContext(Context);
	const [modalShow, setModalShow] = React.useState(false);
	const [modalShow1, setModalShow1] = React.useState(false);
	const [questionnarie_id, setQuestionnarie_id] = useState(0);

	return (
		<Fragment>
			<Modal show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton onClick={() => setModalShow(false)}>
					<Modal.Title id="contained-modal-title-vcenter">Añadir Nuevo Cuestionario</Modal.Title>
				</Modal.Header>
				<form onSubmit={e => submit(e)} className="was-validated">
					<Modal.Body>
						<div className="form-group">
							<input
								className="form-control mb-2"
								placeholder="Titulo"
								required
								onChange={e => add(e.target.value, "name")}
							/>
							<div className="valid-feedback">Válido</div>
							<div className="invalid-feedback">Por favor complete este campo.</div>
						</div>
						<div className="form-group">
							<textarea
								className="form-control"
								id="exampleFormControlTextarea1"
								rows="3"
								placeholder="Descripción"
								required
								onChange={e => add(e.target.value, "questionnarie_details")}
							/>
							<div className="valid-feedback">Válido</div>
							<div className="invalid-feedback">Por favor complete este campo.</div>
						</div>
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
					<Modal.Title id="contained-modal-title-vcenter">Editar Cuestionario</Modal.Title>
				</Modal.Header>

				<form onSubmit={e => update(e, questionnarie_id)} className="was-validated">
					<Modal.Body>
						<div className="form-group">
							<input
								className="form-control mb-2"
								placeholder="Titulo"
								required
								onChange={e => edit(e.target.value, "name")}
							/>
							<div className="valid-feedback">Válido</div>
							<div className="invalid-feedback">Por favor complete este campo.</div>
						</div>
						<div className="form-group">
							<textarea
								className="form-control"
								id="exampleFormControlTextarea1"
								rows="3"
								placeholder="Descripción"
								required
								onChange={e => edit(e.target.value, "questionnarie_details")}
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
				<div className="col-lg-9 offset-lg-1 mt-3">
					<h4 className="text-center">{title}</h4>
					{list &&
						list.map((item, index) => {
							return (
								<ul key={index}>
									<li>
										<h5>
											<strong>{item.name}</strong>
										</h5>

										<FontAwesomeIcon
											icon={faEdit}
											className="ml-2 mr-2"
											onClick={() => {
												setModalShow1(true);
												setQuestionnarie_id(item.id);
											}}
										/>

										<FontAwesomeIcon icon={faTrash} className="mr-2" onClick={() => del(item.id)} />

										<input
											className="form-check-input-inline"
											type="checkbox"
											id="inlineCheckbox1"
											value="option1"
										/>
									</li>
									<p>{item.questionnarie_details}</p>
								</ul>
							);
						})}
					<br />
				</div>
			</div>
			<div className="row">
				<div className="col-lg-9 offset-lg-1 text-center">
					<Button variant="btn btn-outline-primary" onClick={() => setModalShow(true)}>
						<FontAwesomeIcon icon={faPlus} className="mr-2" />
						Añadir Cuestionario
					</Button>
				</div>
			</div>
		</Fragment>
	);
};

QuestionnarieForm.propTypes = {
	onHide: PropTypes.any,
	list: PropTypes.any,
	title: PropTypes.string,
	add: PropTypes.func,
	submit: PropTypes.func,
	del: PropTypes.func,
	edit: PropTypes.func,
	update: PropTypes.func
};
