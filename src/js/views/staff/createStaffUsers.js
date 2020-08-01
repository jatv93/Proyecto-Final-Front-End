import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import SideNav from "../../component/sidenav";
import { UsersTable } from "../../component/tables/usersTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { CreateStaffUserForm } from "../../component/forms/createStaffUserForm";

export const CreateStaffUsers = () => {
	const { store, actions } = useContext(Context);
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<>
			<Modal show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton onClick={() => setModalShow(false)}>
					<Modal.Title id="contained-modal-title-vcenter">Añadir Nuevo Usuario</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<div className="col-lg-6 offset-lg-3 mb-5">
						<CreateStaffUserForm />
					</div>
				</Modal.Body>
			</Modal>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2">
							<h1 className="text-center">Creación de Usuarios</h1>
							<h3 className="text-center">Staff</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 mt-2 mb-4">
							<UsersTable
								searchFields={["name", "lastName", "email"]}
								columns={["name", "lastName", "email"]}
								list={store.allStaffUsers}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6 offset-lg-3 text-center">
							<Button variant="btn btn-outline-primary" onClick={() => setModalShow(true)}>
								<FontAwesomeIcon icon={faPlus} className="mr-2" />
								Añadir Usuario
							</Button>
						</div>
					</div>
				</div>
			</SideNav>
		</>
	);
};

CreateStaffUsers.propTypes = {
	onHide: PropTypes.any
};
