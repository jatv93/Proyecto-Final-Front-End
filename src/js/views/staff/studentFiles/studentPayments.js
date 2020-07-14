import React, { Fragment, useContext } from "react";
import { Context } from "../../../store/appContext";
import { PaymentDataForm } from "../../../component/forms/paymentDataForm";
import { Table } from "../../../component/tables/Table";
import SideNav from "../../../component/sidenav";

export const StudentPayments = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 mt-2">
							<h1 className="text-center">Pagos Realizados</h1>
							<h3 className="text-center">Jennifer Toledo</h3>
						</div>
					</div>

					<PaymentDataForm />
					<br />
					<Table
						searchFields={["date", "amount"]}
						columns={["id", "payment_id", "date", "amount"]}
						list={store.studentPaymentsTable}
					/>
				</div>
			</SideNav>
		</Fragment>
	);
};
