const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			student: {
				name: "",
				lastName: "",
				email: "",
				password: "",
				verification: ""
			},

			studentList: []
		},
		actions: {
			addInfo: e => {
				const store = getStore();
				const { student } = store;
				student[e.target.name] = e.target.value;
				setStore({ student: student });
				e.preventDefault();
			},

			submitInfo: e => {
				const store = getStore();
				const { student } = store;
				setStore({
					studentList: student,
					student: {
						name: "",
						lastName: "",
						email: "",
						password: "",
						verification: ""
					}
				});
				e.preventDefault();
			},

			addLoginInfo: e => {
				const store = getStore();
				const { loginDataStudent } = store;
				loginDataStudent[e.target.name] = e.target.value;
				setStore({ loginDataStudent: loginDataStudent });
				e.preventDefault();
			}
		}
	};
};

export default getState;
