import React, { Fragment, useContext } from "react";
import { SearchBar } from "../../../component/searchBar";
import SideNav from "../../../component/sidenav";
import { Context } from "../../../store/appContext";
import { JobProfileTable } from "../../../component/tables/jobProfileTable";

export const JobProfile = () => {
	const { store } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 mt-4">
							<h1 className="text-center">Perfiles Laborales</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 mt-2 mb-4">
							<SearchBar />
						</div>
					</div>

					<JobProfileTable />
				</div>
			</SideNav>
		</Fragment>
	);
};
