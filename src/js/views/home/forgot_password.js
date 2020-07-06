import React from "react";

export const Forgot_Password = () => (
	<div className="container">
		<div className="row">
			<div className="col-8">
				<h1>Restablecer contraseña</h1>
				<br />
				<p>Le enviaremos un correo electrónico con más instrucciones sobre cómo restablecer su contraseña.</p>
			</div>
		</div>
		<div className="row">
			<div className="col-3 form-group">
				<input type="text" className="form-control" id="email" placeholder="Correo electrónico" />
			</div>
		</div>
		<div className="row">
			<div className="col-3">
				<button type="submit" className="btn btn-primary">
					Enviar
				</button>
			</div>
		</div>
	</div>
);
