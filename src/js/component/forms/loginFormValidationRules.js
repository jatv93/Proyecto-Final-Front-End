export default function validate(values) {
	let errors = {};
	if (!values.email) {
		errors.email = "El correo electrónico es obligatorio";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "El correo electrónico es inválido";
	}
	if (!values.password) {
		errors.password = "La contraseña es obligatoria";
	} else if (values.password.length < 6) {
		errors.password = "La contraseña debe tener 6 o más caracteres";
	}
	if (!values.verification) {
		errors.verification = "La contraseña es obligatoria";
	} else if (values.verification.length < 6) {
		errors.verification = "La contraseña debe tener 6 o más caracteres";
	}
	if (!values.name) {
		errors.name = "El nombre es obligatorio";
	}
	if (!values.lastName) {
		errors.lastName = "El apellido es obligatorio";
	}

	return errors;
}

export function validateLogin(values) {
	let errors = {};
	if (!values.email) {
		errors.email = "El correo electrónico es obligatorio";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "El correo electrónico es inválido";
	}
	if (!values.password) {
		errors.password = "La contraseña es obligatoria";
	} else if (values.password.length < 6) {
		errors.password = "La contraseña debe tener 6 o más caracteres";
	}

	return errors;
}
