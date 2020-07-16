import React, { Fragment, useContext } from "react";
import SideNav from "../../../component/sidenav";
import { Context } from "../../../store/appContext";
import { Table } from "../../../component/tables/Table";

export const StudentInvoices = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 mt-2">
							<h1 className="text-center">Facturas</h1>
						</div>
					</div>

					<Table
						searchFields={["date", "amount"]}
						columns={["id", "invoice_id", "date", "amount"]}
						list={store.studentInvoiceTable}
						scope={"/invoices/:invoice_id"}
					/>
					<br />
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<h1 className="text-center">Notas de Crédito</h1>
						</div>
					</div>
					<Table
						searchFields={["date", "amount"]}
						columns={["id", "note_id", "date", "amount"]}
						list={store.studentCreditNoteTable}
						scope={"/invoices/:credit_note_id"}
					/>
				</div>
			</SideNav>
		</Fragment>
	);
};
