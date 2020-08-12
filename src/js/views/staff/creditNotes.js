import React, { Fragment, useContext } from "react";
import SideNav from "../../component/sidenav";
import { Context } from "../../store/appContext";
import { Table } from "../../component/tables/Table";

export const CreditNotes = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 mt-3">
							<h1 className="text-center">Notas de Crédito</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 mt-2 mb-4">
							<Table
								searchFields={["rut", "full_name"]}
								columns={["rut", "full_name", "cohort", "modality", "note_id", "date", "amount"]}
								list={store.creditNoteTable}
								scope={"/credit_notes/:credit_note_id"}
							/>
						</div>
					</div>
				</div>
			</SideNav>
		</Fragment>
	);
};
