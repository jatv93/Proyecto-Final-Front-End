import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { validateLogin } from "./FormValidationRules";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";
import useForm from "./useForm";
import "../../../styles/teacherQuestions.scss";

export const LoginForm = props => {
	const { store, actions } = useContext(Context);
	const { values, errors, handleChangeLogin, handleSubmitLogin, setValues } = useForm(login, validateLogin);
	const [msg, setMsg] = useState(null);
	const [role, setRole] = useState(null);
	const [url, setUrl] = useState(null);

	async function login() {
		console.log("No errors, submit callback called!");
		const resp = await fetch(`https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/${role}_login`, {
			method: "POST",
			body: JSON.stringify(store.userLogin),
			headers: {
				"Content-type": "application/json"
			}
		});
		const data = await resp.json();
		if (!data.msg) {
			actions.storeLoginInfo();
			setValues("");
			setMsg(null);
			props.history.push(url);
		} else {
			setMsg(
				<div className="alert alert-danger" role="alert">
					{data.msg}
				</div>
			);
		}
	}

	return (
		<>
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<a
						className="nav-link btn btn-outline-primary"
						href="#"
						onClick={() => {
							login(), setRole("student"), setUrl("/student/profile");
						}}>
						Estudiantes
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link btn btn-outline-primary"
						href="#"
						onClick={() => {
							login(), setRole("staff"), setUrl("/staff/files");
						}}>
						Staff
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link btn btn-outline-primary"
						href="#"
						onClick={() => {
							login(), setRole("teacher"), setUrl("/teacher");
						}}>
						Profesores
					</a>
				</li>
			</ul>
			<br />
			<form onSubmit={handleSubmitLogin} noValidate>
				{!!msg && msg}
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
		</>
	);
};

LoginForm.propTypes = {
	history: PropTypes.object
};
