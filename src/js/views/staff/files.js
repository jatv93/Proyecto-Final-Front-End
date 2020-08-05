import React, { Fragment, useContext, useState } from "react";
import { Table } from "../../component/tables/Table";
import SideNav from "../../component/sidenav";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";

export const Files = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 mt-5">
							<h1 className="text-center">Expedientes de Estudiantes</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 mt-2 mb-4">
							<Table
								searchFields={["name", "lastName", "email"]}
								columns={["name", "lastName", "cohort", "email", "phone", "breathecode_id"]}
								list={store.filesDataTable}
							/>
						</div>
					</div>
				</div>
			</SideNav>
		</Fragment>
	);
};
