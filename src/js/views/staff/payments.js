import React, { Fragment, useContext } from "react";
import SideNav from "../../component/sidenav";
import { Context } from "../../store/appContext";
import { Table } from "../../component/tables/Table";

export const Payments = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 mt-3">
							<h1 className="text-center">Pagos</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 mt-2 mb-4">
							<Table
								searchFields={["name", "lastName", "email"]}
								columns={["name", "lastName", "cohort", "modality", "breathecode_id"]}
								list={store.paymentsTable}
								scope={"/payments/:payment_id"}
							/>
						</div>
					</div>
				</div>
			</SideNav>
		</Fragment>
	);
};
