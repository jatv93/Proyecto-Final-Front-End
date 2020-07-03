import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";

export const FilesTable = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row">
			<div className="col-12 col-lg-10 col-lg-10 offset-lg-1">
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<th scope="col">#</th>
							<th scope="col" onClick={e => actions.sortByName(e)}>
								Nombre
							</th>
							<th scope="col" onClick={e => actions.sortByLastName(e)}>
								Apellido
							</th>
							<th scope="col">Cohorte</th>
							<th scope="col">Modalidad</th>
							<th scope="col">Teléfono</th>
							<th scope="col">Correo electrónico</th>
							<th scope="col">Breathecode ID</th>
						</tr>
					</thead>
					<tbody>
						{store.filesDataTable.map((item, index) => {
							return (
								<>
									<tr key={index}>
										<th scope="row">{item.id}</th>
										<td>{item.name}</td>
										<td>{item.lastName}</td>
										<td>{item.cohort}</td>
										<td>{item.modality}</td>
										<td>{item.phone}</td>
										<td>{item.email}</td>
										<td>{item.breathecode_id}</td>
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
