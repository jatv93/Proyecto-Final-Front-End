import React, { Fragment, useContext } from "react";
import { PersonalDataForm } from "../../../component/forms/personalDataForm";
import "../../../../styles/files.css";
import SideNav from "../../../component/sidenav";
import { Context } from "../../../store/appContext";
import { Link } from "react-router-dom";

export const StudentProfile = () => {
	const { store } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="row title">
					<div className="col-lg-6 offset-lg-3 mt-5">
						<h1 className="text-center">Expediente de Jennifer Toledo</h1>
					</div>
				</div>

				<div className="container">
					<PersonalDataForm />
				</div>

				<div className="container">
					<div className="row">
						<div className="col-lg-6 mt-5">
							<Link to="/staff/files/student/agreement">
								<button className="subtitles btn btn-outline-primary my-2 my-sm-0" type="submit">
									Acuerdo de Inscripción
								</button>
							</Link>
							<br />
							<br />
							<Link to="/staff/files/student/financing">
								<button className="subtitles btn btn-outline-primary my-2 my-sm-0" type="submit">
									Contratos de Financiamiento
								</button>
							</Link>
							<br />
							<br />
							<Link to="/staff/files/student/payments">
								<button className="subtitles btn btn-outline-primary my-2 my-sm-0" type="submit">
									Pagos Realizados
								</button>
							</Link>
						</div>
						<div className="col-lg-6 mt-5">
							<Link to="/staff/files/student/invoices">
								<button className="subtitles btn btn-outline-primary my-2 my-sm-0" type="submit">
									Facturas y notas de crédito
								</button>
							</Link>
							<br />
							<br />
							<Link to="/staff/files/student/job_profile">
								<button className="subtitles btn btn-outline-primary my-2 my-sm-0" type="submit">
									Perfil Laboral
								</button>
							</Link>
							<br />
							<br />
							<Link to="/staff/files/student/teacher_comments">
								<button className="subtitles btn btn-outline-primary my-2 my-sm-0" type="submit">
									Comentarios del profesor/ayudante
								</button>
							</Link>
						</div>
					</div>
				</div>
			</SideNav>
		</Fragment>
	);
};
