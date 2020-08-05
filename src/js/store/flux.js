const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			sideBarContent: {
				staff: [
					{ title: "Student Files", link: "/staff/files" },
					{ title: "Job Profile", link: "/staff/job_profile" },
					{ title: "Student Agreement", link: "/staff/agreements" },
					{ title: "Financing Agreement", link: "/staff/financing" },
					{ title: "Payment", link: "/staff/payments" },
					{ title: "Invoices", link: "/staff/invoices" },
					{ title: "Credit Notes", link: "/staff/credit_notes" }
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
				teacher: [{ title: "My Cohorts", link: "/teacher" }]
			},
			studentRegister: {
				name: "",
				lastName: "",
				email: "",
				password: "",
				verification: ""
			},

			allStudentUsers: [],

			studentLogin: {
				email: "",
				password: ""
			},

			staffUsers: {
				name: "",
				lastName: "",
				email: "",
				password: "",
				verification: ""
			},

			allStaffUsers: [],

			teacherUsers: {
				name: "",
				lastName: "",
				email: "",
				password: "",
				verification: ""
			},

			allTeacherUsers: [],

			filesDataTable: [],

			jobProfileTable: [
				{
					id: 1,
					name: "Ramon",
					lastName: "Perez",
					cohort: "I",
					modality: "PT",
					breathecode_id: 150
				},
				{
					id: 2,
					name: "Orlando",
					lastName: "Martinez",
					cohort: "II",
					modality: "PT",
					breathecode_id: 100
				},
				{
					id: 3,
					name: "Fernando",
					lastName: "Fernandez",
					cohort: "II",
					modality: "PT",
					breathecode_id: 110
				}
			],

			studentPaymentsTable: [
				{
					id: 1,
					payment_id: 350,
					date: "03/06/2020",
					amount: "1.000.000",
					breathecode_id: 150
				},
				{
					id: 2,
					payment_id: 620,
					date: "09/06/2020",
					amount: "700.000",
					breathecode_id: 150
				},
				{
					id: 3,
					payment_id: 563,
					date: "06/07/2020",
					amount: "300.000",
					breathecode_id: 150
				}
			],
			studentInvoiceTable: [
				{
					id: 1,
					invoice_id: 200,
					date: "03/06/2020",
					amount: "1.000.000",
					breathecode_id: 150
				},
				{
					id: 2,
					invoice_id: 210,
					date: "09/06/2020",
					amount: "700.000",
					breathecode_id: 150
				},
				{
					id: 3,
					invoice_id: 300,
					date: "06/07/2020",
					amount: "300.000",
					breathecode_id: 150
				}
			],

			studentCreditNoteTable: [
				{
					id: 1,
					note_id: 5,
					date: "03/06/2020",
					amount: "1.000.000",
					breathecode_id: 150
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
					amount: "1.000.000",
					breathecode_id: 150
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
					amount: "1.000.000",
					breathecode_id: 150
				},
				{
					id: 2,
					rut: "27.009.732-4",
					full_name: "Jennifer Toledo",
					cohort: "II",
					modality: "PT",
					invoice_id: 300,
					date: "09/06/2020",
					amount: "700.000",
					breathecode_id: 150
				},
				{
					id: 3,
					rut: "27.009.732-4",
					full_name: "Jennifer Toledo",
					cohort: "II",
					modality: "PT",
					invoice_id: 450,
					date: "06/07/2020",
					amount: "300.000",
					breathecode_id: 150
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
					amount: "1.000.000",
					breathecode_id: 150
				}
			], //esta info viene del SII

			jobProfileStudentQuestions: [
				{
					question_id: 1,
					question: "¿Estarías dispuesto/a a aceptar un cargo trainee, prácticas o pasantías?"
				},
				{
					question_id: 2,
					question:
						"¿De ser afirmativo, ¿cuáles son tus condiciones? Por ejemplo, ¿aceptarías el cargo sin remuneración??"
				},
				{
					question_id: 3,
					question:
						"¿Cuál área del desarrollo de software te interesa/inclinas o se te hace más fácil (front o back)?"
				},
				{
					question_id: 4,
					question:
						"Tomando en cuenta que los cargos trainee o pasantías son un nivel más sencillo que los cargos Junior, ¿te gustaría postularte como practicante Full-Stack o prefieres que sea netamente sobre el área de tu inclinación?"
				},
				{
					question_id: 5,
					question: "¿Dominas el inglés? ¿Te consideras una persona bilingüe?"
				},
				{
					question_id: 6,
					question: "¿Tienes experiencia previa en programación?"
				},
				{
					question_id: 7,
					question: "¿Anteriormente has trabajado en programación, tecnología o afín?"
				}
			],

			jobProfileStudentAnswers: [
				{
					answer_id: 1,
					question_id: 1,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				},
				{
					answer_id: 2,
					question_id: 2,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				},
				{
					answer_id: 3,
					question_id: 3,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				},
				{
					answer_id: 4,
					question_id: 4,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				},
				{
					answer_id: 5,
					question_id: 5,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				},
				{
					answer_id: 6,
					question_id: 6,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				},
				{
					answer_id: 7,
					question_id: 7,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				}
			],

			strengthQuestions: [
				{
					question_id: 1,
					question: "¿Qué hace a este estudiante mejor que los otros?"
				},
				{
					question_id: 2,
					question: "¿Qué está haciendo muy bien?"
				},
				{
					question_id: 3,
					question: "¿Habilidades más asombrosas?"
				},
				{
					question_id: 4,
					question: "¿Qué dicen los demás que él/ella hace muy bien?"
				}
			],

			strengthAnswers: [
				{
					answer_id: 1,
					question_id: 1,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				},
				{
					answer_id: 2,
					question_id: 2,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				},
				{
					answer_id: 3,
					question_id: 3,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				},
				{
					answer_id: 4,
					question_id: 4,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				}
			],

			weaknessQuestions: [
				{
					question_id: 1,
					question: "¿Qué puede mejorar el estudiante?"
				},
				{
					question_id: 2,
					question: "¿De qué formas no es eficiente?"
				},
				{
					question_id: 3,
					question: "¿Qué no está haciendo bien?"
				},
				{
					question_id: 4,
					question: "¿Qué es lo que definitivamente no va a hacer muy bien?"
				}
			],

			weaknessAnswers: [
				{
					answer_id: 1,
					question_id: 1,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				},
				{
					answer_id: 2,
					question_id: 2,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				},
				{
					answer_id: 3,
					question_id: 3,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				},
				{
					answer_id: 4,
					question_id: 4,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				}
			],

			projectionQuestions: [
				{
					question_id: 1,
					question: "¿De qué tendencias recurrentes se puede aprovechar el alumno?"
				},
				{
					question_id: 2,
					question:
						"¿Alguna habilidad interesante que pueda desarrollarse más para conseguir trabajos impresionantes? "
				},
				{
					question_id: 3,
					question: "¿Es disciplinado/a?"
				},
				{
					question_id: 4,
					question: "¿Es apasionado/a por programar?"
				},
				{
					question_id: 5,
					question: "¿Algún impedimento para convertirse en un desarrollador real?"
				}
			],

			projectionAnswers: [
				{
					answer_id: 1,
					question_id: 1,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				},
				{
					answer_id: 2,
					question_id: 2,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				},
				{
					answer_id: 3,
					question_id: 3,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				},
				{
					answer_id: 4,
					question_id: 4,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				},
				{
					answer_id: 5,
					question_id: 5,
					answer:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante, laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque efficitur aliquam sodales. Vestibulum eget sagittis magna."
				}
			],

			studentQuestion: "",

			teacherStrengthQuestion: "",

			teacherWeaknessQuestion: "",

			teacherProjectionQuestion: ""
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

			handleChangeStaffRegister: e => {
				const store = getStore();
				const { staffUsers } = store;
				staffUsers[e.target.name] = e.target.value;
				setStore({ staffUsers: staffUsers });
			},

			handleChangeTeacherRegister: e => {
				const store = getStore();
				const { teacherUsers } = store;
				teacherUsers[e.target.name] = e.target.value;
				setStore({ teacherUsers: teacherUsers });
			},

			storeLoginInfo: () => {
				setStore({
					studentLogin: {
						email: "",
						password: ""
					}
				});
			},

			storeRegisterInfo: () => {
				setStore({
					studentRegister: {
						name: "",
						lastName: "",
						email: "",
						password: "",
						verification: ""
					}
				});
			},

			storeStaffInfo: () => {
				setStore({
					staffUsers: {
						name: "",
						lastName: "",
						email: "",
						password: "",
						verification: ""
					}
				});
			},

			storeTeacherInfo: () => {
				setStore({
					teacherUsers: {
						name: "",
						lastName: "",
						email: "",
						password: "",
						verification: ""
					}
				});
			},

			addStudentQuestion: value => {
				setStore({ studentQuestion: value });
			},

			submitStudentQuestion: e => {
				e.preventDefault();
				const store = getStore();
				const { jobProfileStudentQuestions } = store;
				const { studentQuestion } = store;
				const question = jobProfileStudentQuestions.concat({
					question_id: jobProfileStudentQuestions[jobProfileStudentQuestions.length - 1].question_id + 1,
					question: studentQuestion
				});
				setStore({ jobProfileStudentQuestions: question });
			},

			deleteStudentQuestion: index => {
				const store = getStore();
				store.jobProfileStudentQuestions.splice(index, 1);
				setStore({ jobProfileStudentQuestions: store.jobProfileStudentQuestions });
			},

			addTeacherStrengthQuestion: value => {
				setStore({ teacherStrengthQuestion: value });
			},

			submitTeacherStrengthQuestion: e => {
				e.preventDefault();
				const store = getStore();
				const { strengthQuestions } = store;
				const { teacherStrengthQuestion } = store;
				const question = strengthQuestions.concat({
					question_id: strengthQuestions[strengthQuestions.length - 1].question_id + 1,
					question: teacherStrengthQuestion
				});
				setStore({ strengthQuestions: question });
			},

			deleteTeacherStrengthQuestion: index => {
				const store = getStore();
				store.strengthQuestions.splice(index, 1);
				setStore({ strengthQuestions: store.strengthQuestions });
			},

			addTeacherWeaknessQuestion: value => {
				setStore({ teacherWeaknessQuestion: value });
			},

			submitTeacherWeaknessQuestion: e => {
				e.preventDefault();
				const store = getStore();
				const { weaknessQuestions } = store;
				const { teacherWeaknessQuestion } = store;
				const question = weaknessQuestions.concat({
					question_id: weaknessQuestions[weaknessQuestions.length - 1].question_id + 1,
					question: teacherWeaknessQuestion
				});
				setStore({ weaknessQuestions: question });
			},

			deleteTeacherWeaknessQuestion: index => {
				const store = getStore();
				store.weaknessQuestions.splice(index, 1);
				setStore({ weaknessQuestions: store.weaknessQuestions });
			},

			addTeacherProjectionQuestion: value => {
				setStore({ teacherProjectionQuestion: value });
			},

			submitTeacherProjectionQuestion: e => {
				e.preventDefault();
				const store = getStore();
				const { projectionQuestions } = store;
				const { teacherProjectionQuestion } = store;
				const question = projectionQuestions.concat({
					question_id: projectionQuestions[projectionQuestions.length - 1].question_id + 1,
					question: teacherProjectionQuestion
				});
				setStore({ projectionQuestions: question });
			},

			deleteTeacherProjectionQuestion: index => {
				const store = getStore();
				store.projectionQuestions.splice(index, 1);
				setStore({ projectionQuestions: store.projectionQuestions });
			},
			getStaffUsers: () => {
				fetch("https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/staff_users")
					.then(response => response.json())
					.then(data => {
						setStore({
							allStaffUsers: data
						});
					});
			},

			getTeacherUsers: () => {
				fetch("https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/teacher_users")
					.then(response => response.json())
					.then(data =>
						setStore({
							allTeacherUsers: data
						})
					);
			},

			getStudentUsers: () => {
				fetch("https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/student_users")
					.then(response => response.json())
					.then(data =>
						setStore({
							allStudentUsers: data
						})
					);
			},

			deleteStaffUser: id => {
				fetch("https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/staff_users/" + `${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => getActions().getStaffUsers());
			},

			getfilesDataTable: () => {
				fetch("https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/profiles")
					.then(response => response.json())
					.then(data =>
						setStore({
							filesDataTable: data
						})
					);
			}
		}
	};
};

export default getState;
