import React from "react";
import { LoginForm } from "../../component/forms/loginForm";
import { Navbar } from "../../component/navbar";
import { Footer } from "../../component/footer";
import PropTypes from "prop-types";

export const Login = props => (
	<>
		<Navbar />
		<div className="container">
			<div className="row">
				<div className="col-lg-6 offset-lg-3">
					<h1 className="text-center pb-1">Inicio de Sesión</h1>

					<LoginForm history={props.history} />
				</div>
			</div>
		</div>
		<Footer />
	</>
);

Login.propTypes = {
	history: PropTypes.object
};
