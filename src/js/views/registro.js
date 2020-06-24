import React from "react";
import rigoImage from "../../img/logo-home.png";
import "../../styles/home.scss";

export const Registro = () => (
	<div className="container col-12 col-md-6 offset-md-3">
		<form>
			<div className="form-group">
				<label forhtml="formGroupExampleInput">Nombre</label>
				<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
			</div>
			<div className="form-group">
				<label forhtml="formGroupExampleInput2">Apellido</label>
				<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
			</div>
			<div className="form-group">
				<label forhtml="formGroupExampleInput2">Correo Electrónico</label>
				<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
			</div>
			<div className="form-group">
				<label forhtml="exampleInputPassword1">Contraseña</label>
				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
			</div>
			<div className="form-group">
				<label forhtml="exampleInputPassword1">Repetir Contraseña</label>
				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
			</div>

			<button type="submit" className="btn btn-primary">
				Registrar
			</button>
		</form>
	</div>
);
