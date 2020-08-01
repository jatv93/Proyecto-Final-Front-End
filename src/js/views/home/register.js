import React from "react";
import { RegisterForm } from "../../component/forms/registerForm";
import { Navbar } from "../../component/navbar";
import PropTypes from "prop-types";
import { Footer } from "../../component/footer";

export const Register = props => (
	<>
		<Navbar />
		<div className="container">
			<div className="row">
				<div className="col-lg-6 offset-lg-3">
					<h1 className="text-center">Registro</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-lg-6 offset-lg-3 mt-3">
					<RegisterForm history={props.history} />
				</div>
			</div>
		</div>
		<Footer />
	</>
);

Register.propTypes = {
	history: PropTypes.object
};
