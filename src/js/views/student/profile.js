import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import SideNav from "../../component/sidenav/index.js";
import { RegisterForm } from "../../component/forms/registerForm";
import { Footer } from "../../component/footer";

const Profile = () => {
	const { store } = useContext(Context);
	return (
		<>
			<SideNav links={store.sideBarContent.student}>
				<Footer />
			</SideNav>
		</>
	);
};

export default Profile;
