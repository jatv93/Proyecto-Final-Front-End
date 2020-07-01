import React, { Fragment } from "react";
import { FilesTable } from "../../component/tables/filesTable";
import { SearchBar } from "../../component/searchBar";

export const Files = () => {
	return (
		<Fragment>
			<SearchBar />
			<FilesTable />
		</Fragment>
	);
};
