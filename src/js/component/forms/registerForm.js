import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import validate from "./loginFormValidationRules";
import useForm from "./useForm";

export const RegisterForm = () => {
	const { store, actions } = useContext(Context);
	const { values, errors, handleChangeRegister, handleSubmitRegister, setValues } = useForm(register, validate);

	async function register() {
		console.log("No errors, submit callback called!"); //realizar el fetch aquí
		const resp = await fetch("");
		const data = await resp.json();
		if (!data.msg) {
			actions.storeRegisterInfo(event); // validar con el backend aquí
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
