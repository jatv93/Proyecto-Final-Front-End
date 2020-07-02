const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			sideBarContent: {
				staff: [
					"Expedientes de Estudiantes",
					"Perfiles Laborales",
					"Acuerdo de Inscripción",
					"Contrato de Financiamiento",
					"Pagos",
					"Facturas",
					"Notas de Credito"
				],
				student: [
					"Perfil",
					"Perfil laboral",
					"Acuerdo de Inscripción",
					"Contrato de Financiamiento",
					"Pagos",
					"Facturas",
					"Notas de Credito"
				],
				teacher: ["Mis Cohortes"]
			},
			studentRegister: {
				name: "",
				lastName: "",
				email: "",
				password: "",
				verification: ""
			},

			studentRegisterList: [],

			studentLogin: {
				email: "",
				password: ""
			},

			studentLoginList: []
		},

		actions: {
			handleChangeLogin: e => {
				const store = getStore();
				const { studentLogin } = store;
				studentLogin[e.target.name] = e.target.value;
				setStore({
					studentLogin: studentLogin
				});
			},

			handleChangeRegister: e => {
				const store = getStore();
				const { studentRegister } = store;
				studentRegister[e.target.name] = e.target.value;
				setStore({ studentRegister: studentRegister });
			},

			storeLoginInfo: e => {
				e.preventDefault();
				const store = getStore();
				const { studentLogin } = store;
				setStore({
					studentLoginList: studentLogin,
					studentLogin: {
						email: "",
						password: ""
					}
				});
			},

			storeRegisterInfo: e => {
				e.preventDefault();
				const store = getStore();
				const { studentRegister } = store;
				setStore({
					studentRegisterList: studentRegister,
					studentRegister: {
						name: "",
						lastName: "",
						email: "",
						password: "",
						verification: ""
					}
				});
			}
		}
	};
};

export default getState;
