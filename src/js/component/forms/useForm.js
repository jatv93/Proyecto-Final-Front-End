import { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";

const useForm = (callback, validate) => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);

	const handleChangeLogin = event => {
		event.persist();
		setValues(values => ({ ...values, [event.target.name]: event.target.value }));
		actions.handleChangeLogin(event);
	};

	const handleChangeStaffLogin = event => {
		event.persist();
		setValues(values => ({ ...values, [event.target.name]: event.target.value }));
		actions.handleChangeStaffLogin(event);
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

	const handleChangeStaffRegister = event => {
		event.persist();
		setValues(values => ({ ...values, [event.target.name]: event.target.value }));
		actions.handleChangeStaffRegister(event);
	};

	const handleSubmitStaffRegister = event => {
		if (event) event.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};

	const handleChangeTeacherRegister = event => {
		event.persist();
		setValues(values => ({ ...values, [event.target.name]: event.target.value }));
		actions.handleChangeTeacherRegister(event);
	};

	const handleSubmitTeacherRegister = event => {
		if (event) event.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};
	return {
		handleChangeLogin,
		handleChangeRegister,
		handleSubmitLogin,
		handleChangeStaffLogin,
		handleSubmitRegister,
		handleChangeStaffRegister,
		handleSubmitStaffRegister,
		handleChangeTeacherRegister,
		handleSubmitTeacherRegister,
		values,
		errors,
		setValues
	};
};

export default useForm;
