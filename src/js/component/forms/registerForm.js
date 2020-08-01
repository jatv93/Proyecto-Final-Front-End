import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import validate from "./loginFormValidationRules";
import useForm from "./useForm";
import PropTypes from "prop-types";

export const RegisterForm = props => {
	const { store, actions } = useContext(Context);
	const { values, errors, handleChangeRegister, handleSubmitRegister, setValues } = useForm(register, validate);

	async function register() {
		console.log("No errors, submit callback called!");
		const resp = await fetch(
			"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/student_register",
			{
				method: "POST",
				body: JSON.stringify(store.studentRegister),
				headers: {
					"Content-type": "application/json"
				}
			}
		);
		const data = await resp.json();
		if (!data.msg) {
			actions.storeRegisterInfo();
			setValues("");
		}
	}

	return (
		<form onSubmit={handleSubmitRegister} noValidate>
			<div className="form-group">
				<label>Nombre</label>
				<br />
				<input
					type="text"
					className={`form-control input ${errors.name && "border-danger"}`}
					name="name"
					autoComplete="off"
					onChange={handleChangeRegister}
					value={values.name || ""}
					required
				/>
			</div>
			{errors.name && <p className="help text-danger">{errors.name}</p>}
			<div className="form-group">
				<label>Apellido</label>
				<br />
				<input
					type="text"
					className={`form-control input ${errors.lastName && "border-danger"}`}
					name="lastName"
					autoComplete="off"
					onChange={handleChangeRegister}
					value={values.lastName || ""}
					required
				/>
			</div>
			{errors.lastName && <p className="help text-danger">{errors.lastName}</p>}
			<div className="form-group">
				<label>Correo Electrónico</label>
				<br />
				<input
					className={`form-control input ${errors.email && "border-danger"}`}
					type="email"
					name="email"
					autoComplete="off"
					onChange={handleChangeRegister}
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
					onChange={handleChangeRegister}
					value={values.password || ""}
					required
				/>
				{errors.password && <p className="help text-danger">{errors.password}</p>}
			</div>
			<div className="form-group">
				<label>Repetir Contraseña</label>
				<br />
				<input
					className={`form-control input ${errors.verification && "border-danger"}`}
					type="password"
					name="verification"
					onChange={handleChangeRegister}
					value={values.verification || ""}
					required
				/>
				{errors.verification && <p className="help text-danger">{errors.verification}</p>}
			</div>

			<button type="submit" className="submit btn btn-primary">
				Registrar
			</button>
		</form>
	);
};

RegisterForm.propTypes = {
	history: PropTypes.object
};
