const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			sideBarContent: {
				staff: [
					{ title: "Student Files", link: "/staff/files" },
					{ title: "Job Profile", link: "/staff/job_profile" },
					{ title: "Questionnaries", link: "/staff/job_profile/questionnaries" },
					{ title: "Student Questionnaries", link: "/staff/job_profile/student_questionnarie" },
					{ title: "Teacher Questionnaries", link: "/staff/job_profile/teacher_questionnarie" },
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

			jobProfileTable: [],

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

			teacherAnswers: [],

			newTeacherAnswer: "",

			teacherQuestionnaries: [],

			studentQuestionnaries: [],

			newStudentQuestion: "",

			editStudentQuestion: "",

			newTeacherQuestion: "",

			editTeacherQuestion: "",

			newTeacherQuestionnarie: {
				name: "",
				questionnarie_details: ""
			},

			editTeacherQuestionnarie: {
				name: "",
				questionnarie_details: ""
			},

			newStudentQuestionnarie: {
				name: "",
				questionnarie_details: ""
			},

			editStudentQuestionnarie: {
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

			editStudentQuestion: value => {
				setStore({ editStudentQuestion: value });
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
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/student_questions",
					options
				);
				const data = await resp.json();
				getActions().getStudentQuestions();
			},

			updateStudentQuestion: async (e, id) => {
				e.preventDefault();
				const store = getStore();
				const { editStudentQuestion } = store;
				const question = editStudentQuestion;

				let token = sessionStorage.getItem("data");

				const options = {
					method: "PUT",
					body: JSON.stringify({ question: question }),
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`
					}
				};

				const resp = await fetch(
					`https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/student_questions/${id}`,
					options
				);
				const data = await resp.json();
				getActions().getStudentQuestions();
			},

			deleteStudentQuestion: async id => {
				const store = getStore();
				store.studentQuestions.splice(id - 1, 1);
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
					`https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/student_questions/${id}`,
					options
				);
				const data = await resp.json();
				getActions().getStudentQuestions();
			},

			addTeacherQuestion: value => {
				setStore({ newTeacherQuestion: value });
			},

			editTeacherQuestion: value => {
				setStore({ editTeacherQuestion: value });
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
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/teacher_questions",
					options
				);
				const data = await resp.json();
				getActions().getTeacherQuestions();
			},

			updateTeacherQuestion: async (e, id) => {
				e.preventDefault();
				const store = getStore();
				const { editTeacherQuestion } = store;
				const question = editTeacherQuestion;

				let token = sessionStorage.getItem("data");

				const options = {
					method: "PUT",
					body: JSON.stringify({ question: question }),
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`
					}
				};

				const resp = await fetch(
					`https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/teacher_questions/${id}`,
					options
				);
				const data = await resp.json();
				getActions().getTeacherQuestions();
			},

			deleteTeacherQuestion: async id => {
				const store = getStore();
				store.teacherQuestions.splice(id - 1, 1);
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
					`https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/teacher_questions/${id}`,
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

			editTeacherQuestionnarie: (value, name) => {
				const store = getStore();
				const { editTeacherQuestionnarie } = store;
				editTeacherQuestionnarie[name] = value;
				setStore({ editTeacherQuestionnarie: editTeacherQuestionnarie });
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
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/teacher_questionnaries",
					options
				);
				const data = await resp.json();
				getActions().getTeacherQuestionnaries();
			},

			updateTeacherQuestionnarie: async (e, id) => {
				e.preventDefault();
				const store = getStore();
				const { editTeacherQuestionnarie } = store;
				const details = editTeacherQuestionnarie;
				console.log(details);

				let token = sessionStorage.getItem("data");

				const options = {
					method: "PUT",
					body: JSON.stringify(details),
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`
					}
				};

				const resp = await fetch(
					`https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/teacher_questionnaries/${id}`,
					options
				);
				const data = await resp.json();
				getActions().getTeacherQuestionnaries();
				if (data.msg == "Questionnarie Updated") return true;
				else return false;
			},

			deleteTeacherQuestionnarie: async id => {
				const store = getStore();
				store.teacherQuestionnaries.splice(id - 1, 1);
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
					`https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/teacher_questionnaries/${id}`,
					options
				);
				const data = await resp.json();
			},

			addTeacherAnswer: value => {
				setStore({ newTeacherAnswer: value });
			},

			submitTeacherAnswer: async e => {
				e.preventDefault();
				const store = getStore();
				const { newTeacherAnswer } = store;
				const answer = newTeacherAnswer;

				let token = sessionStorage.getItem("data");

				const options = {
					method: "POST",
					body: JSON.stringify({ answer: answer }),
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`
					}
				};

				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/teacher_answers",
					options
				);
				const data = await resp.json();
				getActions().getTeacherAnswers();
			},

			deleteTeacherAnswer: async id => {
				const store = getStore();
				store.teacherAnswers.splice(id - 1, 1);
				setStore({ teacherAnswers: store.teacherAnswers });

				let token = sessionStorage.getItem("data");

				const options = {
					method: "DELETE",
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`
					}
				};

				const resp = await fetch(
					`https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/teacher_answers/${id}`,
					options
				);
				const data = await resp.json();
				getActions().getTeacherAnswer();
			},

			addStudentQuestionnarie: (value, name) => {
				const store = getStore();
				const { newStudentQuestionnarie } = store;
				newStudentQuestionnarie[name] = value;
				setStore({ newStudentQuestionnarie: newStudentQuestionnarie });
			},

			editStudentQuestionnarie: (value, name) => {
				const store = getStore();
				const { editStudentQuestionnarie } = store;
				editStudentQuestionnarie[name] = value;
				setStore({ editStudentQuestionnarie: editStudentQuestionnarie });
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
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/student_questionnaries",
					options
				);
				const data = await resp.json();
				getActions().getStudentQuestionnaries();
			},

			updateStudentQuestionnarie: async (e, id) => {
				e.preventDefault();
				const store = getStore();
				const { editStudentQuestionnarie } = store;
				const details = editStudentQuestionnarie;
				console.log(details);

				let token = sessionStorage.getItem("data");

				const options = {
					method: "PUT",
					body: JSON.stringify(details),
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`
					}
				};

				const resp = await fetch(
					`https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/student_questionnaries/${id}`,
					options
				);
				const data = await resp.json();
				getActions().getStudentQuestionnaries();
				if (data.msg == "Questionnarie Updated") return true;
				else return false;
			},

			deleteStudentQuestionnarie: async id => {
				console.log(id);
				const store = getStore();
				store.studentQuestionnaries.splice(id - 1, 1);
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
					`https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/student_questionnaries/${id}`,
					options
				);
				const data = await resp.json();
				if (data.success) {
					setStore({ studentQuestionnaries: data });
				}
			},

			getStaffUsers: async () => {
				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/staff_users"
				);
				const data = await resp.json();
				setStore({
					allStaffUsers: data
				});
			},

			getTeacherUsers: async () => {
				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/teacher_users"
				);
				const data = await resp.json();
				setStore({
					allTeacherUsers: data
				});
			},

			getStudentUsers: async () => {
				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/student_users"
				);
				const data = await resp.json();
				setStore({
					allStudentUsers: data
				});
			},

			deleteStaffUser: async id => {
				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/staff_users/" + `${id}`,
					{
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					}
				);
				const data = await resp.json();
				getActions().getStaffUsers();
			},

			getfilesDataTable: async () => {
				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/profiles"
				);
				const data = await resp.json();
				setStore({
					filesDataTable: data
				});
			},

			getAgreementsTable: async id => {
				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/enrrollment_agreements/" +
						`${id}`
				);
				const data = await resp.json();
				setStore({
					agreement: data
				});
			},

			getFinancingTable: async id => {
				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/financing_agreements/" +
						`${id}`
				);
				const data = await resp.json();
				setStore({
					financing: data
				});
			},

			getPaymentTable: async () => {
				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/payments"
				);
				const data = await resp.json();
				setStore({
					paymentsTable: data
				});
			},

			getInvoiceTable: async () => {
				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/invoices"
				);
				const data = await resp.json();
				setStore({
					invoicesTable: data
				});
			},

			getCreditNoteTable: async () => {
				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/credit_notes"
				);
				const data = await resp.json();
				setStore({
					creditNoteTable: data
				});
			},

			getTeacherQuestions: async () => {
				let token = sessionStorage.getItem("data");
				const options = {
					headers: {
						Authorization: `Bearer ${token}`
					}
				};
				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/teacher_questions",
					options
				);
				const data = await resp.json();
				setStore({
					teacherQuestions: data
				});
			},

			getTeacherQuestionnaries: async () => {
				let token = sessionStorage.getItem("data");
				const options = {
					headers: {
						Authorization: `Bearer ${token}`
					}
				};
				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/teacher_questionnaries",
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
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/student_questionnaries",
					options
				);

				const data = await resp.json();
				setStore({ studentQuestionnaries: data });
			},

			getStudentQuestions: async () => {
				let token = sessionStorage.getItem("data");
				const options = {
					headers: {
						Authorization: `Bearer ${token}`
					}
				};
				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/student_questions",
					options
				);
				const data = await resp.json();
				setStore({
					studentQuestions: data
				});
			},
			getTeacherAnswers: async () => {
				let token = sessionStorage.getItem("data");
				const options = {
					headers: {
						Authorization: `Bearer ${token}`
					}
				};
				const resp = await fetch(
					"https://3000-bbd8fc57-2353-4651-9394-13352bc59922.ws-us03.gitpod.io/teacher_answers",
					options
				);
				const data = await resp.json();
				setStore({
					teacherAnswers: data
				});
			}
		}
	};
};

export default getState;
