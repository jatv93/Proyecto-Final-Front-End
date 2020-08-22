import React, { Fragment, useContext } from "react";
import { Context } from "../../../store/appContext";
import SideNav from "../../../component/sidenav";

export const StudentJobProfile = () => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<h1 className="text-center">Perfil Laboral</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<br />
							{store.studentQuestions.map((item, index) => {
								const answer = store.studentAnswers.find(
									answer => answer.question_id == item.question_id
								);
								item.answer = answer ? answer.answer : null;
								return (
									<>
										<ul key={index}>
											<li>
												<h5>{item.question}</h5>
											</li>
										</ul>
										<p>{item.answer}</p>
									</>
								);
							})}
						</div>
					</div>
				</div>
			</SideNav>
		</Fragment>
	);
};
