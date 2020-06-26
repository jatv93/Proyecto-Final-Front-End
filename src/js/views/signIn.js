import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const SignIn = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col-12 col-md-6 offset-md-3">
					<form>
						<div className="form-group">
							<label forhtml="name">Nombre</label>
							<input
								type="text"
								className="form-control"
								name="name"
								required
								value={store.student.name}
								onChange={e => actions.addInfo(e)}
							/>
						</div>
						<div className="form-group">
							<label forhtml="lastName">Apellido</label>
							<input
								type="text"
								className="form-control"
								name="lastName"
								required
								value={store.student.lastName}
								onChange={e => actions.addInfo(e)}
							/>
						</div>
						<div className="form-group">
							<label forhtml="email">Correo Electrónico</label>
							<input
								type="text"
								className="form-control"
								name="email"
								required
								value={store.student.email}
								onChange={e => actions.addInfo(e)}
							/>
						</div>
						<div className="form-group">
							<label forhtml="password">Contraseña</label>
							<input
								type="password"
								className="form-control"
								name="password"
								required
								value={store.student.password}
								onChange={e => actions.addInfo(e)}
							/>
						</div>
						<div className="form-group">
							<label forhtml="password">Repetir Contraseña</label>
							<input
								type="password"
								className="form-control"
								name="verification"
								required
								value={store.student.verification}
								onChange={e => actions.addInfo(e)}
							/>
						</div>

						<button type="submit" className="submit btn btn-primary" onClick={e => actions.submitInfo(e)}>
							Registrar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
