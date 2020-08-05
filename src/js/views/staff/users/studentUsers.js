import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import SideNav from "../../../component/sidenav";
import { UsersTable } from "../../../component/tables/usersTable";

export const StudentUsers = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2">
							<h1 className="text-center">Listado de Usuarios</h1>
							<h3 className="text-center">Students</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 mt-2 mb-4">
							<UsersTable
								searchFields={["name", "lastName", "email"]}
								columns={["name", "lastName", "email"]}
								list={store.allStudentUsers}
							/>
						</div>
					</div>
				</div>
			</SideNav>
		</>
	);
};
