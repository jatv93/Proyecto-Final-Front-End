import React, { Fragment } from "react";
import { Teachertable } from "../../component/teacherTable.js";
import { SearchBar } from "../../component/searchBar.js";

export const teachome = () => {
	return (
		<Fragment>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-3">
						<h1 className="text-center">Cuestionario</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-lg-10 offset-lg-1 mt-2 mb-4" />
					<SearchBar />
					<Teachertable />
				</div>
			</div>
		</Fragment>
	);
};
