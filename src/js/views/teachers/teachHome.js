import React, { Fragment } from "react";
import { Teachertable } from "./teacherTable.js";
import { SearchBar } from "./searchBar.js";

export const teachome = () => {
	return (
		<Fragment>
			<SearchBar />
			<Teachertable />
		</Fragment>
	);
};
