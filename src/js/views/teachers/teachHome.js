import React, { Fragment, useContext } from "react";
import { Teachertable } from "../../component/tables/teacherTable.js";
import { SearchBar } from "../../component/searchBar.js";
import SideNav from "../../component/sidenav/index.js";
import { Context } from "../../store/appContext.js";

export const teachome = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.teacher}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 mt-5">
							<h1 className="text-center">Cuestionario</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-lg-10 offset-lg-1 mt-2 mb-4" />
						<SearchBar />
						<Teachertable />
					</div>
				</div>
			</SideNav>
		</Fragment>
	);
};
