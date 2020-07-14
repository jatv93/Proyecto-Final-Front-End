import React from "react";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home/home";
import { Register } from "./views/home/register";
import { Login } from "./views/home/login";
import { Forgot_Password } from "./views/home/forgot_password";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";
import { teachome } from "./views/teachers/teachHome";
import { teachform } from "./views/teachers/teacherForm";
import { studentStrength } from "./views/teachers/strengths";
import { studentWeakness } from "./views/teachers/weaknesses";

import SideNav from "./component/sidenav";
import Profile from "./views/student/profile";

import { Files } from "./views/staff/files";
import { StudentProfile } from "./views/staff/studentFiles/studentProfile";
import { StudentAgreement } from "./views/staff/studentFiles/studentAgreement";
import { StudentFinancing } from "./views/staff/studentFiles/studentFinancing";
import { StudentPayments } from "./views/staff/studentFiles/studentPayments";
import { StudentInvoices } from "./views/staff/studentFiles/studentInvoices";
import { StudentJobProfile } from "./views/staff/studentFiles/studentJobProfile";
import { TeacherComments } from "./views/staff/studentFiles/teacherComments";
import { JobProfile } from "./views/staff/jobProfile/jobProfile";
import { Invoices } from "./views/staff/invoices";
import { CreditNotes } from "./views/staff/creditNotes";
import { Agreements } from "./views/staff/agreements";
import { Financing } from "./views/staff/financing";
import { Payments } from "./views/staff/payments";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/forgot_password" component={Forgot_Password} />
						<Route exact path="/staff/files" component={Files} />
						<Route exact path="/staff/files/:breathecode_id">
							<StudentProfile />
						</Route>
						<Route exact path="/staff/files/:breathecode_id/agreement" component={StudentAgreement} />

						<Route exact path="/staff/files/:breathecode_id/financing" component={StudentFinancing} />
						<Route exact path="/staff/files/:breathecode_id/payments" component={StudentPayments} />
						<Route exact path="/staff/files/:breathecode_id/invoices" component={StudentInvoices} />
						<Route exact path="/staff/files/:breathecode_id/job_profile" component={StudentJobProfile} />
						<Route exact path="/staff/files/:breathecode_id/teacher_comments" component={TeacherComments} />
						<Route exact path="/staff/job_profile" component={JobProfile} />
						<Route exact path="/staff/agreements" component={Agreements} />
						<Route exact path="/staff/financing" component={Financing} />
						<Route exact path="/staff/payments" component={Payments} />
						<Route exact path="/staff/invoices" component={Invoices} />
						<Route exact path="/staff/credit_notes" component={CreditNotes} />
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
