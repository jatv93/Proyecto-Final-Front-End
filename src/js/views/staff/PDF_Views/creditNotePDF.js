import React, { Fragment, useContext } from "react";
import SideNav from "../../../component/sidenav";
import { Context } from "../../../store/appContext";
import { PreviewPDF } from "../../../component/previewPDF";

export const CreditNotePDF = () => {
	const { store } = useContext(Context);

	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 mt-4">
							<h1 className="text-center">Nota de Crédito N° 1</h1>
							<h3 className="text-center">Jennifer Toledo</h3>
						</div>
					</div>

					<PreviewPDF />
				</div>
			</SideNav>
		</Fragment>
	);
};
