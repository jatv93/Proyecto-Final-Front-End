import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home/home";
import { RegisterForm } from "./component/forms/registerForm";
import { Login } from "./views/home/login";
import { Forgot_Password } from "./views/home/forgot_password";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { teachome } from "./views/teachers/teachHome";
import { teachform } from "./views/teachers/teacherForm";
import { studentStrength } from "./views/teachers/strengths";
import { studentWeakness } from "./views/teachers/weaknesses";
import { Files } from "./views/staff/files";
import SideNav from "./component/sidenav";
import Profile from "./views/student/profile";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/register" component={RegisterForm} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/staff/files" component={Files} />
						<Route exact path="/forgot_password" component={Forgot_Password} />
						<Route exact path="/teacher" component={teachome} />
						<Route exact path="/teacher/form" component={teachform} />
						<Route exact path="/teacher/form/strengths" component={studentStrength} />
						<Route exact path="/teacher/form/weaknesses" component={studentWeakness} />
						<Route exact path="/nav" component={Profile} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
