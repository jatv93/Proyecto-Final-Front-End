import React from "react";

export const FilesTable = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 col-lg-10 col-md-10 offset-md-1">
					<table className="table">
						<thead className="thead-dark">
							<tr>
								<th scope="col">#</th>
								<th scope="col">First</th>
								<th scope="col">Last</th>
								<th scope="col">Cohorte</th>
								<th scope="col">Modalidad</th>
								<th scope="col">Fecha de Ingreso</th>
								<th scope="col">Correo</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>C-I</td>
								<td>PT</td>
								<td>20-03-2019</td>
								<td>mark.otto@gmail.com</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>C-I</td>
								<td>PT</td>
								<td>20-03-2019</td>
								<td>jacob.Thornton@gmail.com</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Larry</td>
								<td>the Bird</td>
								<td>C-II</td>
								<td>FT</td>
								<td>15-04-2019</td>
								<td>Larry.bird@gmail.com</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
