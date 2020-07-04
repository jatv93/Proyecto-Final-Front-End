import React, { Fragment, useContext } from "react";
import { PersonalDataForm } from "../../component/forms/personalDataForm";
import "../../../styles/files.css";
import SideNav from "../../component/sidenav";
import { Context } from "../../store/appContext";

export const StudentProfile = () => {
	const { store } = useContext(Context);
	return (
		<Fragment>
			<div className="row title">
				<div className="col-lg-6 offset-lg-3">
					<h1 className="text-center">Expediente de Jennifer Toledo</h1>
				</div>
			</div>
			<div className="container">
				<PersonalDataForm />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 mt-5">
						<button className="subtitles btn btn-outline-primary my-2 my-sm-0" type="submit">
							Acuerdo de Inscripción
						</button>
						<br />
						<br />
						<button className="subtitles btn btn-outline-primary my-2 my-sm-0" type="submit">
							Contratos de Financiamiento
						</button>
						<br />
						<br />
						<button className="subtitles btn btn-outline-primary my-2 my-sm-0" type="submit">
							Pagos Realizados
						</button>
					</div>
					<div className="col-lg-6 mt-5">
						<button className="subtitles btn btn-outline-primary my-2 my-sm-0" type="submit">
							Facturas y notas de crédito
						</button>
						<br />
						<br />
						<button className="subtitles btn btn-outline-primary my-2 my-sm-0" type="submit">
							Perfil Laboral
						</button>
						<br />
						<br />
						<button className="subtitles btn btn-outline-primary my-2 my-sm-0" type="submit">
							Comentarios del profesor/ayudante
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
