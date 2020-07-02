import React, { Fragment } from "react";
import { Teachertable } from "../../component/teacherTable.js";
import { SearchBar } from "../../component/searchBar.js";

export const teachome = () => {
	return (
		<Fragment>
			<SearchBar />
			<Teachertable />
		</Fragment>
	);
};
