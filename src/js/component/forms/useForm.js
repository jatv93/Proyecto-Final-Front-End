import { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";

const useForm = (callback, validate) => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			if (Object.keys(errors).length === 0 && isSubmitting) {
				callback();
			}
		},
		[errors]
	);

	const handleChangeLogin = event => {
		event.persist();
		setValues(values => ({ ...values, [event.target.name]: event.target.value }));
		actions.handleChangeLogin(event);
	};

	const handleSubmitLogin = event => {
		if (event) event.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};

	const handleChangeRegister = event => {
		event.persist();
		setValues(values => ({ ...values, [event.target.name]: event.target.value }));
		actions.handleChangeRegister(event);
	};

	const handleSubmitRegister = event => {
		if (event) event.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};

	return {
		handleChangeLogin,
		handleChangeRegister,
		handleSubmitLogin,
		handleSubmitRegister,
		values,
		errors,
		setValues
	};
};

export default useForm;
