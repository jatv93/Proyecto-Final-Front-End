import React from "react";
import { Link } from "react-router-dom";

export const Login = () => (
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-6 offset-md-3">
				<form>
					<div className="form-group">
						<label forhtml="email">Correo Electrónico</label>
						<input type="text" className="form-control" id="email" />
					</div>
					<div className="form-group">
						<label forhtml="password">Contraseña</label>
						<input type="password" className="form-control" id="password" />
					</div>
					<Link to="/forgot_password">
						<p>Olvidé mi contraseña</p>
					</Link>

					<button type="submit" className="submit btn btn-primary">
						Ingresar
					</button>
				</form>
			</div>
		</div>
	</div>
);
