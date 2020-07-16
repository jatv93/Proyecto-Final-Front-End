import React, { Fragment, useContext } from "react";
import "../../../styles/files.css";
import SideNav from "../../component/sidenav";
import { Context } from "../../store/appContext";
import { Table } from "../../component/tables/Table";

export const Agreements = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 mt-5">
							<h1 className="text-center">Acuerdos de Inscripción</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 mt-2 mb-4">
							<Table
								searchFields={["name", "lastName"]}
								columns={["name", "lastName", "cohort", "modality", "breathecode_id"]}
								list={store.agreementsTable}
								scope={"/agreement"}
							/>
						</div>
					</div>
				</div>
			</SideNav>
		</Fragment>
	);
};
