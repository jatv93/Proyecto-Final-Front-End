import React, { Fragment, useContext } from "react";
import SideNav from "../../../component/sidenav";
import { Context } from "../../../store/appContext";
import { StudentInvoiceTable } from "../../../component/tables/studentInvoiceTable";
import { StudentCreditNoteTable } from "../../../component/tables/studentCreditNoteTable";

export const StudentInvoices = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 mt-5">
							<h1 className="text-center">Facturas</h1>
						</div>
					</div>

					<StudentInvoiceTable />
					<br />
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<h1 className="text-center">Notas de Crédito</h1>
						</div>
					</div>
					<StudentCreditNoteTable />
				</div>
			</SideNav>
		</Fragment>
	);
};
