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
		errors.password = "La contraseña debe tener más de 6 caracteres";
	}
	return errors;
}
