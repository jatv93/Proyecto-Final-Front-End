import React, { Fragment } from "react";
import { FilesTable } from "../../component/tables/filesTable";
import { SearchBar } from "../../component/searchBar";
import "../../../styles/files.css";

export const Files = () => {
	return (
		<Fragment>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-3">
						<h1 className="text-center">Expedientes de los Alumnos</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-lg-10 offset-lg-1 mt-2 mb-4">
						<SearchBar />
					</div>
				</div>

				<FilesTable />
			</div>
		</Fragment>
	);
};
