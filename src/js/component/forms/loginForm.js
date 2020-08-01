import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { validateLogin } from "./loginFormValidationRules";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";
import useForm from "./useForm";

export const LoginForm = props => {
	const { store, actions } = useContext(Context);
	const { values, errors, handleChangeLogin, handleSubmitLogin, setValues } = useForm(login, validateLogin);

	async function login() {
		console.log("No errors, submit callback called!");
		const resp = await fetch("https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/login", {
			method: "POST",
			body: JSON.stringify(store.studentLogin),
			headers: {
				"Content-type": "application/json"
			}
		});
		const data = await resp.json();
		if (!data.msg) {
			actions.storeLoginInfo();
			setValues("");
			props.history.push("/student/profile");
		}
	}

	return (
		<form onSubmit={handleSubmitLogin} noValidate>
			<div className="form-group">
				<label>Correo Electrónico</label>
				<br />
				<input
					className={`form-control input ${errors.email && "border-danger"}`}
					type="email"
					name="email"
					autoComplete="off"
					onChange={handleChangeLogin}
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
					onChange={handleChangeLogin}
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
	);
};

LoginForm.propTypes = {
	history: PropTypes.object
};
