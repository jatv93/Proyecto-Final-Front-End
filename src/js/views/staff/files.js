import React, { Fragment, useContext } from "react";
import { FilesTable } from "../../component/tables/filesTable";
import { SearchBar } from "../../component/searchBar";
import "../../../styles/files.css";
import SideNav from "../../component/sidenav";
import { Context } from "../../store/appContext";

export const Files = () => {
	const { store } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 mt-4">
							<h1 className="text-center">Expedientes de Estudiantes</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 mt-2 mb-4">
							<SearchBar />
						</div>
					</div>

					<FilesTable />
				</div>
			</SideNav>
		</Fragment>
	);
};
