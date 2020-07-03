const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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

			studentLoginList: [],

			filesDataTable: [
				{
					id: 1,
					name: "Ramon",
					lastName: "Perez",
					cohort: "I",
					modality: "PT",
					phone: "975906062",
					email: "prueba@prueba.com",
					breathecode_id: "150"
				},
				{
					id: 2,
					name: "Orlando",
					lastName: "Martinez",
					cohort: "II",
					modality: "PT",
					phone: "972848039",
					email: "jatv@jatv.com",
					breathecode_id: "100"
				},
				{
					id: 3,
					name: "Fernando",
					lastName: "Fernandez",
					cohort: "II",
					modality: "PT",
					phone: "972848039",
					email: "jatv@jatv.com",
					breathecode_id: "110"
				}
			]
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
			},

			sortByName: () => {
				const store = getStore();
				const { filesDataTable } = store;
				const sorted = [...filesDataTable].sort((a, b) => {
					const x = a.name.toUpperCase();
					const y = b.name.toUpperCase();
					return x == y ? 0 : x > y ? 1 : -1;
				});
				setStore({ filesDataTable: sorted });
				console.log(sorted);
			},

			sortByLastName: () => {
				const store = getStore();
				const { filesDataTable } = store;
				const sorted = [...filesDataTable].sort((a, b) => {
					const x = a.lastName.toUpperCase();
					const y = b.lastName.toUpperCase();
					return x == y ? 1 : x > y ? -1 : 0;
				});
				setStore({ filesDataTable: sorted });
			}
		}
	};
};

export default getState;
