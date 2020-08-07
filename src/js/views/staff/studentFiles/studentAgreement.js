import React, { Fragment, useContext, useEffect, useState } from "react";
import SideNav from "../../../component/sidenav";
import { Context } from "../../../store/appContext";
import { PreviewPDF } from "../../../component/previewPDF";
import PropTypes from "prop-types";

export const StudentAgreement = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getAgreementsTable(props.match.params.breathecode_id);
	}, []);

	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 mt-4">
							<h1 className="text-center">Acuerdo de Inscripción</h1>
						</div>
					</div>

					<PreviewPDF url={store.agreement.urlPDF == null ? "loading..." : store.agreement.urlPDF} />
				</div>
			</SideNav>
		</Fragment>
	);
};

StudentAgreement.propTypes = {
	match: PropTypes.any
};
