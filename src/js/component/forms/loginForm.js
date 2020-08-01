import React, { useContext } from "react";
import { Link } from "react-router-dom";
import validate from "./loginFormValidationRules";
import useForm from "./useForm";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";

export const LoginForm = props => {
	const { store, actions } = useContext(Context);
	const { values, errors, handleChangeLogin, handleSubmitLogin, setValues } = useForm(login, validate);

	async function login() {
		console.log("No errors, submit callback called!"); //realizar el fetch aquí
		const resp = await fetch("https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/login", {
			method: "POST",
			body: JSON.stringify(store.studentLogin),
			headers: {
				"Content-type": "application/json"
			}
		});
		const data = await resp.json();
		console.log(data);
		props.history.push("/student/profile");
		if (!data.msg) {
			actions.storeLoginInfo(); // validar con el backend aquí
			setValues("");
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
