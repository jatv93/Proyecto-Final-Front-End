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
					breathecode_id: "150",
					rut: "27.009.732-4",
					birth_date: "20/10/1993",
					address: "Evaristo Lillo 29, Las Condes",
					region: "Region Metropolitana"
				},
				{
					id: 2,
					name: "Orlando",
					lastName: "Martinez",
					cohort: "II",
					modality: "PT",
					phone: "972848039",
					email: "jatv@jatv.com",
					breathecode_id: "100",
					rut: "26.153.225-8",
					birth_date: "24/08/1993",
					address: "Evaristo Lillo 101, Las Condes",
					region: "Region Metropolitana"
				},
				{
					id: 3,
					name: "Fernando",
					lastName: "Fernandez",
					cohort: "II",
					modality: "PT",
					phone: "972848039",
					email: "jatv@jatv.com",
					breathecode_id: "110",
					rut: "25.665.298-4",
					birth_date: "26/01/1993",
					address: "Av Apoquindo 2903, Las Condes",
					region: "Region Metropolitana"
				}
			],

			jobProfileTable: [
				{
					id: 1,
					name: "Ramon",
					lastName: "Perez",
					cohort: "I",
					modality: "PT"
				},
				{
					id: 2,
					name: "Orlando",
					lastName: "Martinez",
					cohort: "II",
					modality: "PT"
				},
				{
					id: 3,
					name: "Fernando",
					lastName: "Fernandez",
					cohort: "II",
					modality: "PT"
				}
			],

			studentPaymentsTable: [
				{
					id: 1,
					payment_id: 350,
					date: "03/06/2020",
					amount: "1.000.000"
				},
				{
					id: 2,
					payment_id: 620,
					date: "09/06/2020",
					amount: "700.000"
				},
				{
					id: 3,
					payment_id: 563,
					date: "06/07/2020",
					amount: "300.000"
				}
			],
			studentInvoiceTable: [
				{
					id: 1,
					invoice_id: 200,
					date: "03/06/2020",
					amount: "1.000.000"
				},
				{
					id: 2,
					invoice_id: 210,
					date: "09/06/2020",
					amount: "700.000"
				},
				{
					id: 3,
					invoice_id: 300,
					date: "06/07/2020",
					amount: "300.000"
				}
			],

			studentCreditNoteTable: [
				{
					id: 1,
					note_id: 5,
					date: "03/06/2020",
					amount: "1.000.000"
				}
			],

			agreementsTable: [
				{
					id: 1,
					name: "Jennifer",
					lastName: "Toledo",
					cohort: "II",
					modality: "PT",
					breathecode_id: 150
				}
			],

			financingTable: [
				{
					id: 1,
					name: "Jennifer",
					lastName: "Toledo",
					cohort: "II",
					modality: "PT",
					breathecode_id: 150
				}
			],

			paymentsTable: [
				{
					id: 1,
					name: "Jennifer",
					lastName: "Toledo",
					payment_id: 5,
					cohort: "II",
					modality: "PT",
					date: "03/06/2020",
					amount: "1.000.000"
				}
			],

			invoicesTable: [
				{
					id: 1,
					rut: "27.009.732-4",
					full_name: "Jennifer Toledo",
					cohort: "II",
					modality: "PT",
					invoice_id: 202,
					date: "03/06/2020",
					amount: "1.000.000"
				},
				{
					id: 2,
					rut: "27.009.732-4",
					full_name: "Jennifer Toledo",
					cohort: "II",
					modality: "PT",
					invoice_id: 300,
					date: "09/06/2020",
					amount: "700.000"
				},
				{
					id: 3,
					rut: "27.009.732-4",
					full_name: "Jennifer Toledo",
					cohort: "II",
					modality: "PT",
					invoice_id: 450,
					date: "06/07/2020",
					amount: "300.000"
				}
			], //esta info viene del SII

			creditNoteTable: [
				{
					id: 1,
					rut: "27.009.732-4",
					full_name: "Jennifer Toledo",
					cohort: "II",
					modality: "PT",
					note_id: 5,
					date: "03/06/2020",
					amount: "1.000.000"
				}
			] //esta info viene del SII
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
