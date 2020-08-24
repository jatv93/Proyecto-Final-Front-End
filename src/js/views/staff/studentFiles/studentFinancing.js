import React, { Fragment, useContext, useState, useEffect } from "react";
import SideNav from "../../../component/sidenav";
import { Context } from "../../../store/appContext";
import { PreviewPDF } from "../../../component/previewPDF";
import PropTypes from "prop-types";

export const StudentFinancing = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getFinancingTable();
	}, []);

	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 mt-4">
							<h1 className="text-center">Contrato de Financiamiento</h1>
						</div>
					</div>

					<PreviewPDF url={store.financing.urlPDF == null ? "loading..." : store.financing.urlPDF} />
				</div>
			</SideNav>
		</Fragment>
	);
};

StudentFinancing.propTypes = {
	match: PropTypes.any
};
