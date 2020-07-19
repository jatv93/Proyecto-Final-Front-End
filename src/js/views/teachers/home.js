import React, { Fragment, useContext, useState } from "react";
import { TeacherTable } from "../../component/tables/teacherTable";
import SideNav from "../../component/sidenav";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";

export const teachome = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.teacher}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 mt-2">
							<h1 className="text-center">Estudiantes</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 mt-2 mb-4">
							<TeacherTable
								searchFields={["name", "lastName", "email"]}
								columns={["name", "lastName", "cohort", "modality", "email", "admission_date"]}
								list={store.filesDataTable}
								scope={"/form"}
							/>
						</div>
					</div>
				</div>
			</SideNav>
		</Fragment>
	);
};
