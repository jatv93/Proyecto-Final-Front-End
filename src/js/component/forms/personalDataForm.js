import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const PersonalDataForm = props => {
	const { store, actions } = useContext(Context);
	const [studentFile, setStudentFile] = useState({});

	useEffect(() => {
		setStudentFile(
			store.filesDataTable.filter(item => {
				return item.breathecode_id === parseInt(props.match.params.breathecode_id);
			})[0]
		);
	}, []);

	return (
		<>
			<div className="row title">
				<div className="col-lg-8 offset-lg-2 mt-5">
					<h1 className="text-center">Expediente de {studentFile.name + " " + studentFile.lastName} </h1>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4 offset-lg-1 mt-4">
					<div>
						<strong>Nombre: </strong>
						{studentFile.name}
					</div>
					<br />
					<div>
						<strong>Apellidos: </strong>
						{studentFile.lastName}
					</div>
					<br />
					<div>
						<strong>Cédula o Pasaporte: </strong>
						{studentFile.rut}
					</div>
					<br />
					<div>
						<strong>Fecha de Nacimiento: </strong>
						{studentFile.birth_date}
					</div>
				</div>
				<div className="col-lg-4 offset-lg-1 mt-4">
					<div>
						<strong>Dirección: </strong>
						{studentFile.address}
					</div>
					<br />
					<div>
						<strong>Teléfono: </strong>
						{studentFile.phone}
					</div>
					<br />
					<div>
						<strong>Correo Electrónico: </strong>
						{studentFile.email}
					</div>
					<br />
					<div>
						<strong>Fecha de Inscripción: </strong>
						{studentFile.admission_date}
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4 offset-lg-1 mt-5">
					<Link to={"/staff/files/" + studentFile.breathecode_id + "/agreement"}>
						<button className="subtitles btn btn-outline-primary my-2 my-sm-0" type="submit">
							Acuerdo de Inscripción
						</button>
					</Link>
					<br />
					<br />
					<Link to={"/staff/files/" + studentFile.breathecode_id + "/financing"}>
						<button className="subtitles btn btn-outline-primary my-2 my-sm-0" type="submit">
							Contratos de Financiamiento
						</button>
					</Link>
					<br />
					<br />
					<Link to={"/staff/files/" + studentFile.breathecode_id + "/payments"}>
						<button className="subtitles btn btn-outline-primary my-2 my-sm-0" type="submit">
							Pagos Realizados
						</button>
					</Link>
				</div>
				<div className="col-lg-4 offset-lg-1 mt-5">
					<Link to={"/staff/files/" + studentFile.breathecode_id + "/invoices"}>
						<button className="subtitles btn btn-outline-primary my-2 my-sm-0" type="submit">
							Facturas y notas de crédito
						</button>
					</Link>
					<br />
					<br />
					<Link to={"/staff/files/" + studentFile.breathecode_id + "/job_profile"}>
						<button className="subtitles btn btn-outline-primary my-2 my-sm-0" type="submit">
							Perfil Laboral
						</button>
					</Link>
					<br />
					<br />
					<Link to={"/staff/files/" + studentFile.breathecode_id + "/teacher_comments"}>
						<button className="subtitles btn btn-outline-primary my-2 my-sm-0" type="submit">
							Comentarios del profesor/ayudante
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

PersonalDataForm.propTypes = {
	match: PropTypes.any
};

export default withRouter(PersonalDataForm);
