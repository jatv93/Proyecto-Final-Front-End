import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export const StudentPaymentsTable = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row">
			<div className="col-lg-12">
				<table className="table">
					<thead className="thead-dark">
						<tr className="text-center">
							<th scope="col">N° de Pago</th>
							<th scope="col">Fecha de Emisión</th>

							<th scope="col">Monto</th>

							<th scope="col">Descargar</th>
						</tr>
					</thead>
					<tbody>
						{store.studentPaymentsTable.map((item, index) => {
							return (
								<>
									<tr className="text-center" key={index}>
										<th scope="row">{item.id}</th>
										<td>{item.date}</td>
										<td>{item.amount}</td>

										<Link to={"/"}>
											<td>
												<i className="fas fa-file-download"></i>
											</td>
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
