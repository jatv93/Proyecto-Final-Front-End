const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			sideBarContent: {
				staff: [
					{ title: "Student Files", link: "/staff/files" },
					{ title: "Job Profile", link: "/staff/files/student/job_profile" },
					{ title: "Student Agreement", link: "/staff/files/student/agreement" },
					{ title: "Financing Agreement", link: "/staff/files/student/financing" },
					{ title: "Payment", link: "/staff/files/student/payments" },
					{ title: "Invoices", link: "/staff/files/student/invoices" },
					{ title: "Credit Notes", link: "/staff/files/student/credit_notes" }
				],
				student: [
					{ title: "Profile", link: "/student/profile" },
					{ title: "Job Profile", link: "/student/job_profile" },
					{ title: "Student Agreement", link: "/student/agreement" },
					{ title: "Financing Agreement", link: "/student/financing" },
					{ title: "Payment", link: "/student/payment" },
					{ title: "Invoices", link: "/student/invoices" },
					{ title: "Credit Notes", link: "/student/credit_notes" }
				],
				teacher: [{ title: "My Cohorts", link: "/teacher/cohorts" }]
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
