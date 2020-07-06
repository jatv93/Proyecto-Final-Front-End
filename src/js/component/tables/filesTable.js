import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import "./filesTable.css";
import { Link } from "react-router-dom";

export const FilesTable = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row">
			<div className="col-lg-12">
				<table className="table">
					<thead className="thead-dark">
						<tr className="text-center">
							<th scope="col">#</th>
							<th scope="col">
								Nombre <i className="fas fa-sort-up" onClick={e => actions.sortByName(e)} />
							</th>

							<th scope="col">
								Apellido <i className="fas fa-sort-down" onClick={e => actions.sortByLastName(e)} />
							</th>
							<th scope="col">Cohorte</th>

							<th scope="col">Modalidad</th>
							<th scope="col">Teléfono</th>
							<th scope="col">Correo electrónico</th>
							<th scope="col">Breathecode ID</th>
							<th scope="col">Expediente</th>
						</tr>
					</thead>
					<tbody>
						{store.filesDataTable.map((item, index) => {
							return (
								<>
									<tr className="text-center" key={index}>
										<th scope="row">{item.id}</th>
										<td>{item.name}</td>
										<td>{item.lastName}</td>
										<td>{item.cohort}</td>
										<td>{item.modality}</td>
										<td>{item.phone}</td>
										<td>{item.email}</td>
										<td>{item.breathecode_id}</td>
										<Link to={"/staff/files/" + item.name + item.lastName}>
											<td>ver</td>
										</Link>
									</tr>
								</>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
