import React, { Fragment } from "react";
import { Teachertable } from "../../component/tables/teacherTable.js";
import { SearchBar } from "../../component/searchBar.js";

export const teachome = () => {
	return (
		<Fragment>
			<SearchBar />
			<Teachertable />
		</Fragment>
	);
};
