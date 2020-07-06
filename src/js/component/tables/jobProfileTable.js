import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import "./filesTable.css";
import { Link } from "react-router-dom";

export const JobProfileTable = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row">
			<div className="col-lg-12">
				<table className="table">
					<thead className="thead-dark">
						<tr className="text-center">
							<th scope="col">#</th>
							<th scope="col">
								Nombre <i className="fas fa-sort-up" onClick={e => actions.sortByName(e)}></i>
							</th>

							<th scope="col">
								Apellido <i className="fas fa-sort-down" onClick={e => actions.sortByLastName(e)}></i>
							</th>
							<th scope="col">Cohorte</th>
							<th scope="col">Modalidad</th>
							<th scope="col">Descargar</th>
						</tr>
					</thead>
					<tbody>
						{store.jobProfileTable.map((item, index) => {
							return (
								<>
									<tr className="text-center" key={index}>
										<th scope="row">{item.id}</th>
										<td>{item.name}</td>
										<td>{item.lastName}</td>
										<td>{item.cohort}</td>
										<td>{item.modality}</td>

										<Link to={"/staff/jobProfile/" + item.name + item.lastName}>
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
