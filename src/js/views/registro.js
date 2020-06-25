import React from "react";

export const Registro = () => (
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-6 offset-md-3">
				<form>
					<div className="form-group">
						<label forhtml="name">Nombre</label>
						<input type="text" className="form-control" id="name" />
					</div>
					<div className="form-group">
						<label forhtml="lastName">Apellido</label>
						<input type="text" className="form-control" id="lastName" />
					</div>
					<div className="form-group">
						<label forhtml="email">Correo Electrónico</label>
						<input type="text" className="form-control" id="email" />
					</div>
					<div className="form-group">
						<label forhtml="password">Contraseña</label>
						<input type="password" className="form-control" id="password" />
					</div>
					<div className="form-group">
						<label forhtml="exampleInputPassword1">Repetir Contraseña</label>
						<input type="password" className="form-control" id="exampleInputPassword1" />
					</div>

					<button type="submit" className="submit btn btn-primary">
						Registrar
					</button>
				</form>
			</div>
		</div>
	</div>
);
