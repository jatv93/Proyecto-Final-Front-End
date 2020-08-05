import React, { Fragment, useContext, useState, useEffect } from "react";
import SideNav from "../../../component/sidenav";
import { Context } from "../../../store/appContext";
import { PreviewPDF } from "../../../component/previewPDF";
import PropTypes from "prop-types";

export const StudentFinancing = props => {
	const { store, actions } = useContext(Context);
	const [studentFile, setStudentFile] = useState(null);

	useEffect(() => {
		setStudentFile(
			store.filesDataTable.filter(item => {
				return item.breathecode_id === props.match.params.breathecode_id;
			})[0]
		);
	}, []);

	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 mt-4">
							<h1 className="text-center">Contrato de Financiamiento</h1>
							<h3 className="text-center">
								{!!studentFile ? studentFile.name + " " + studentFile.lastName : ""}
							</h3>
						</div>
					</div>

					<PreviewPDF />
				</div>
			</SideNav>
		</Fragment>
	);
};

StudentFinancing.propTypes = {
	match: PropTypes.any
};
