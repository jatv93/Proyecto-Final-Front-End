import React, { Fragment, useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import SideNav from "../../component/sidenav";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const teachform = props => {
	const { store, actions } = useContext(Context);
	const [studentFile, setStudentFile] = useState({});

	useEffect(() => {
		setStudentFile(
			store.filesDataTable.filter(item => {
				return item.breathecode_id === parseInt(props.match.params.breathecode_id);
			})[0]
		);
	}, []);

	return (
		<Fragment>
			<SideNav links={store.sideBarContent.teacher}>
				<div className="row">
					<div className="col-lg-12">
						<div className="align-middle text-center mt-2">
							<h1>Cuestionario</h1>
							<h3>{studentFile.name + " " + studentFile.lastName} </h3>
						</div>
					</div>
				</div>
				<br />

				{store.teacherQuestionnaries &&
					store.teacherQuestionnaries.map((questionnarie, index) => {
						return (
							<>
								<div className="row" key={index}>
									<div className="col-8 offset-md-1">
										<Link to={`/teacher/${studentFile.breathecode_id}/form/${questionnarie.name}`}>
											<h3>{questionnarie.name}</h3>
										</Link>
										<p>{questionnarie.questionnarie_details}</p>
										<br />
									</div>
								</div>
							</>
						);
					})}
			</SideNav>
		</Fragment>
	);
};

teachform.propTypes = {
	match: PropTypes.any
};
