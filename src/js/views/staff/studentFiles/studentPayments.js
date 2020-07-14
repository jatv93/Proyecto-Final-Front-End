import React, { Fragment, useContext } from "react";
import { Context } from "../../../store/appContext";
import SideNav from "../../../component/sidenav";
import { string } from "prop-types";
import { PaymentDataForm } from "../../../component/forms/paymentDataForm";
import { StudentPaymentsTable } from "../../../component/tables/studentPaymentsTable";

export const StudentPayments = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 mt-5">
							<h1 className="text-center">Pagos Realizados</h1>
							<h3 className="text-center">Jennifer Toledo</h3>
						</div>
					</div>

					<PaymentDataForm />
					<br />
					<StudentPaymentsTable />
				</div>
			</SideNav>
		</Fragment>
	);
};
