import React from "react";

export const PersonalDataForm = () => {
	return (
		<div className="row">
			<div className="col-lg-6 mt-4">
				<div>
					<strong>Nombre: </strong>
					Jennifer
				</div>
				<br />
				<div>
					<strong>Apellidos: </strong>
					Toledo Vargas
				</div>
				<br />
				<div>
					<strong>Cédula o Pasaporte: </strong>
					27.009.732-4
				</div>
				<br />
				<div>
					<strong>Fecha de Nacimiento: </strong>
					20/10/1993
				</div>
			</div>
			<div className="col-lg-6 mt-4">
				<div>
					<strong>Dirección: </strong>
					Evaristo Lillo 29, Las Condes
				</div>
				<br />
				<div>
					<strong>Región: </strong>
					Región Metropolitana
				</div>
				<br />
				<div>
					<strong>Teléfono: </strong>
					972848039
				</div>
				<br />
				<div>
					<strong>Correo Electrónico: </strong>
					jennifer.toledo@4geeks.co
				</div>
			</div>
		</div>
	);
};
