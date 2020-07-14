import React, { Fragment } from "react";
import { LoginForm } from "../../component/forms/loginForm";
import logoImage from "../../../img/logo.png";
import programaImage from "../../../img/programa.png";
import { Navbar } from "../../component/navbar";

export const Login = () => (
	<Fragment>
		<Navbar />
		<div className="container">
			<div className="row">
				<div className="col-lg-6 offset-lg-3">
					<h1 className="text-center pb-1">Inicio de Sesión</h1>

					<LoginForm />
				</div>
				<div className="col-lg-3">
					<img className="programa" src={programaImage} />
				</div>
			</div>
		</div>
	</Fragment>
);
