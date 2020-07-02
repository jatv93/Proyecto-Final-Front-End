import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import SideNav from "../../component/sidenav/index.js";
import { RegisterForm } from "../../component/forms/registerForm";

const Profile = () => {
	const { store } = useContext(Context);
	return (
		<>
			<SideNav links={store.sideBarContent.student}></SideNav>
		</>
	);
};

export default Profile;
