import React from "react";
import { Link } from "react-router-dom";
import validate from "./loginFormValidationRules";
import useForm from "./useForm";

export const LoginForm = () => {
	const { values, errors, handleChange, handleSubmit } = useForm(login, validate);

	function login() {
		console.log("No errors, submit callback called!");
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-12 col-md-6 offset-md-3">
					<form onSubmit={handleSubmit} noValidate>
						<div className="form-group">
							<label>Correo Electrónico</label>
							<br />
							<input
								className={`form-control input ${errors.email && "border-danger"}`}
								type="email"
								name="email"
								autoComplete="off"
								onChange={handleChange}
								value={values.email || ""}
								required
							/>
							{errors.email && <p className="help text-danger">{errors.email}</p>}
						</div>
						<div className="form-group">
							<label>Contraseña</label>
							<br />
							<input
								className={`form-control input ${errors.password && "border-danger"}`}
								type="password"
								name="password"
								onChange={handleChange}
								value={values.password || ""}
								required
							/>
							{errors.password && <p className="help text-danger">{errors.password}</p>}
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
};
