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

			userLogin: {
				email: "",
				password: ""
			},

			currentUser: null,
			isAuth: false,

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

			studentPaymentsTable: [],
			studentInvoiceTable: [],

			studentCreditNoteTable: [],

			agreement: {},

			financing: {},

			paymentsTable: [],

			invoicesTable: [], //esta info viene del SII

			creditNoteTable: [], //esta info viene del SII

			studentQuestions: [],

			studentAnswers: [
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

			teacherQuestions: [],

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

			newStudentQuestion: "",

			newTeacherQuestion: "",

			newTeacherQuestionnarie: {
				name: "",
				questionnarie_details: ""
			},

			newStudentQuestionnarie: {
				name: "",
				questionnarie_details: ""
			}
		},

		actions: {
			handleChangeLogin: e => {
				const store = getStore();
				const { userLogin } = store;
				userLogin[e.target.name] = e.target.value;
				setStore({
					userLogin: userLogin
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
					userLogin: {
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

			isAuthenticated: () => {
				if (sessionStorage.getItem("isAuth")) {
					setStore({
						currentUser: JSON.parse(sessionStorage.getItem("currentUser")),
						isAuth: JSON.parse(sessionStorage.getItem("isAuth"))
					});
				}
			},

			addStudentQuestion: value => {
				setStore({ newStudentQuestion: value });
			},

			submitStudentQuestion: async (e, questionnarie_id) => {
				e.preventDefault();
				const store = getStore();
				const { newStudentQuestion } = store;
				const question = newStudentQuestion;

				let token = sessionStorage.getItem("data");

				const options = {
					method: "POST",
					body: JSON.stringify({ question: question, questionnarie_id: questionnarie_id }),
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`
					}
				};

				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/student_questions",
					options
				);
				const data = await resp.json();
				getActions().getStudentQuestions();
			},

			deleteStudentQuestion: async id => {
				const store = getStore();
				store.studentQuestions.splice(id, 1);
				setStore({ studentQuestions: store.studentQuestions });

				let token = sessionStorage.getItem("data");

				const options = {
					method: "DELETE",
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`
					}
				};

				const resp = await fetch(
					`https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/student_questions/${id}`,
					options
				);
				const data = await resp.json();
				getActions().getStudentQuestions();
			},

			addTeacherQuestion: value => {
				setStore({ newTeacherQuestion: value });
			},

			submitTeacherQuestion: async (e, questionnarie_id) => {
				e.preventDefault();
				const store = getStore();
				const { newTeacherQuestion } = store;
				const question = newTeacherQuestion;

				let token = sessionStorage.getItem("data");

				const options = {
					method: "POST",
					body: JSON.stringify({ question: question, questionnarie_id: questionnarie_id }),
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`
					}
				};

				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/teacher_questions",
					options
				);
				const data = await resp.json();
				getActions().getTeacherQuestions();
			},

			deleteTeacherQuestion: async id => {
				const store = getStore();
				store.teacherQuestions.splice(id, 1);
				setStore({ teacherQuestions: store.teacherQuestions });

				let token = sessionStorage.getItem("data");

				const options = {
					method: "DELETE",
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`
					}
				};

				const resp = await fetch(
					`https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/teacher_questions/${id}`,
					options
				);
				const data = await resp.json();
				getActions().getTeacherQuestions();
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

				let token = sessionStorage.getItem("data");

				const options = {
					method: "POST",
					body: JSON.stringify(details),
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`
					}
				};

				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/teacher_questionnaries",
					options
				);
				const data = await resp.json();
				getActions().getTeacherQuestionnaries();
			},

			deleteTeacherQuestionnarie: async id => {
				console.log(id);
				const store = getStore();
				store.teacherQuestionnaries.splice(id, 1);
				setStore({ teacherQuestionnaries: store.teacherQuestionnaries });

				let token = sessionStorage.getItem("data");

				const options = {
					method: "DELETE",
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`
					}
				};

				const resp = await fetch(
					`https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/teacher_questionnaries/${id}`,
					options
				);
				const data = await resp.json();
			},

			addStudentQuestionnarie: (value, name) => {
				const store = getStore();
				const { newStudentQuestionnarie } = store;
				newStudentQuestionnarie[name] = value;
				setStore({ newStudentQuestionnarie: newStudentQuestionnarie });
			},

			submitStudentQuestionnarie: async e => {
				e.preventDefault();
				const store = getStore();
				const { newStudentQuestionnarie } = store;
				const details = newStudentQuestionnarie;

				let token = sessionStorage.getItem("data");

				const options = {
					method: "POST",
					body: JSON.stringify(details),
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`
					}
				};

				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/student_questionnaries",
					options
				);
				const data = await resp.json();
				getActions().getStudentQuestionnaries();
			},

			deleteStudentQuestionnarie: async id => {
				console.log(id);
				const store = getStore();
				store.studentQuestionnaries.splice(id, 1);
				setStore({ studentQuestionnaries: store.studentQuestionnaries });

				let token = sessionStorage.getItem("data");

				const options = {
					method: "DELETE",
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`
					}
				};

				const resp = await fetch(
					`https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/student_questionnaries/${id}`,
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

			getFinancingTable: id => {
				fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/financing_agreements/" +
						`${id}`
				)
					.then(response => response.json())
					.then(data =>
						setStore({
							financing: data
						})
					);
			},

			getPaymentTable: () => {
				fetch("https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/payments")
					.then(response => response.json())
					.then(data =>
						setStore({
							paymentsTable: data
						})
					);
			},

			getInvoiceTable: () => {
				fetch("https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/invoices")
					.then(response => response.json())
					.then(data =>
						setStore({
							invoicesTable: data
						})
					);
			},

			getCreditNoteTable: () => {
				fetch("https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/credit_notes")
					.then(response => response.json())
					.then(data =>
						setStore({
							creditNoteTable: data
						})
					);
			},

			getTeacherQuestions: () => {
				let token = sessionStorage.getItem("data");
				const options = {
					headers: {
						Authorization: `Bearer ${token}`
					}
				};
				fetch("https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/teacher_questions", options)
					.then(response => response.json())
					.then(data =>
						setStore({
							teacherQuestions: data
						})
					);
			},

			getTeacherQuestionnaries: async () => {
				let token = sessionStorage.getItem("data");
				const options = {
					headers: {
						Authorization: `Bearer ${token}`
					}
				};
				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/teacher_questionnaries",
					options
				);

				const data = await resp.json();
				setStore({ teacherQuestionnaries: data });
			},

			getStudentQuestionnaries: async () => {
				let token = sessionStorage.getItem("data");
				const options = {
					headers: {
						Authorization: `Bearer ${token}`
					}
				};

				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/student_questionnaries",
					options
				);

				const data = await resp.json();
				setStore({ studentQuestionnaries: data });
			},

			getStudentQuestions: () => {
				let token = sessionStorage.getItem("data");
				const options = {
					headers: {
						Authorization: `Bearer ${token}`
					}
				};
				fetch("https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us02.gitpod.io/student_questions", options)
					.then(response => response.json())
					.then(data =>
						setStore({
							studentQuestions: data
						})
					);
			}
		}
	};
};

export default getState;
