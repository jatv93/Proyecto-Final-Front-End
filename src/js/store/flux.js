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

			staffLogin: {
				email: "",
				password: ""
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

			agreement: {},

			financingTable: [],

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

			teacherQuestions: [
				/*{
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
				}*/
			],

			teacherAnswers: [
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

			teacherQuestionnaries: [],

			studentQuestionnaries: [],

			studentQuestion: "",

			newTeacherQuestion: "",

			newTeacherQuestionnarie: {
				name: "",
				questionnarie_details: ""
			},

			newStudentQuestionnarie: ""
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

			handleChangeStaffLogin: e => {
				const store = getStore();
				const { staffLogin } = store;
				stafftLogin[e.target.name] = e.target.value;
				setStore({
					staffLogin: staffLogin
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

			storeStaffLoginInfo: () => {
				setStore({
					staffLogin: {
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

			addTeacherQuestion: value => {
				setStore({ newTeacherQuestion: value });
			},

			submitTeacherQuestion: async (e, questionnarie_id) => {
				e.preventDefault();
				const store = getStore();
				const { newTeacherQuestion } = store;
				const question = newTeacherQuestion;

				const options = {
					method: "POST",
					body: JSON.stringify({ question: question, questionnarie_id: questionnarie_id }),
					headers: {
						"Content-type": "application/json"
					}
				};

				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/teacher_questions",
					options
				);
				const data = await resp.json();
				if (data.success) {
					setStore({ teacherQuestions: data });
				}
			},

			deleteTeacherQuestion: async id => {
				const store = getStore();
				store.teacherQuestions.splice(id, 1);
				setStore({ teacherQuestions: store.teacherQuestions });

				const options = {
					method: "DELETE",
					headers: {
						"Content-type": "application/json"
					}
				};

				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/teacher_questions/" + `${id}`,
					options
				);
				const data = await resp.json();
				if (data.success) {
					setStore({ teacherQuestions: data });
				}
			},

			addTeacherQuestionnarie: (value, name) => {
				const store = getStore();
				const { newTeacherQuestionnarie } = store;
				newTeacherQuestionnarie[name] = value;
				setStore({ newTeacherQuestionnarie: newTeacherQuestionnarie });
			},

			submitTeacherQuestionnarie: async e => {
				e.preventDefault();
				const store = getStore();
				const { newTeacherQuestionnarie } = store;
				const details = newTeacherQuestionnarie;

				const options = {
					method: "POST",
					body: JSON.stringify(details),
					headers: {
						"Content-type": "application/json"
					}
				};

				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/teacher_questionnaries",
					options
				);
				const data = await resp.json();
				if (data.success) {
					setStore({ teacherQuestionnarie: data });
				}
			},

			deleteTeacherQuestionnarie: async id => {
				const store = getStore();
				store.teacherQuestionnaries.splice(id, 1);
				setStore({ teacherQuestionnaries: store.teacherQuestionnaries });

				const options = {
					method: "DELETE",
					headers: {
						"Content-type": "application/json"
					}
				};

				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/teacher_questionnaries/" +
						`${id}`,
					options
				);
				const data = await resp.json();
				if (data.success) {
					setStore({ teacherQuestionnaries: data });
				}
			},

			addStudentQuestionnarie: value => {
				setStore({ newStudentQuestionnarie: value });
			},

			submitStudentQuestionnarie: async e => {
				e.preventDefault();
				const store = getStore();
				const { studentQuestionnaries } = store;
				const { newStudentQuestionnarie } = store;
				const details = newStudentQuestionnarie;

				const options = {
					method: "POST",
					body: JSON.stringify({ questionnarie_details: details }),
					headers: {
						"Content-type": "application/json"
					}
				};

				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/student_questionnaries",
					options
				);
				const data = await resp.json();
				if (data.success) {
					setStore({ studentQuestionnaries: data });
				}
			},

			deleteStudentQuestionnarie: async id => {
				const store = getStore();
				store.studentQuestionnaries.splice(id, 1);
				setStore({ studentQuestionnaries: store.studentQuestionnaries });

				const options = {
					method: "DELETE",
					headers: {
						"Content-type": "application/json"
					}
				};

				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/student_questionnaries/" +
						`${id}`,
					options
				);
				const data = await resp.json();
				if (data.success) {
					setStore({ studentQuestionnaries: data });
				}
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
			},

			getAgreementsTable: id => {
				fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/enrrollment_agreements/" +
						`${id}`
				)
					.then(response => response.json())
					.then(data =>
						setStore({
							agreement: data
						})
					);
			},

			getFinancingTable: () => {
				fetch("https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/financing_agreements")
					.then(response => response.json())
					.then(data =>
						setStore({
							financingTable: data
						})
					);
			},

			getTeacherQuestions: () => {
				fetch("https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/teacher_questions")
					.then(response => response.json())
					.then(data =>
						setStore({
							teacherQuestions: data
						})
					);
			},

			getTeacherQuestionnaries: () => {
				fetch("https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/teacher_questionnaries")
					.then(response => response.json())
					.then(data =>
						setStore({
							teacherQuestionnaries: data
						})
					);
			},

			getStudentQuestionnaries: () => {
				fetch("https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/student_questionnaries")
					.then(response => response.json())
					.then(data =>
						setStore({
							studentQuestionnaries: data
						})
					);
			}
		}
	};
};

export default getState;
