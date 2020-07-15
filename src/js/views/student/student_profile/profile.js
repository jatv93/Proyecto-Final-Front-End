import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import SideNav from "../../../component/sidenav/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../../component/footer";
import "./profile.css";

const Profile = () => {
	const { store } = useContext(Context);
	return (
		<>
			<SideNav links={store.sideBarContent.student}>
				<div className="container">
					<div className="row text-center mb-2">
						<div className="col-md-12">
							<h1>Profile</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 shadow p-3 mb-5 bg-white rounded">
							<img
								src="https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg"
								className="img-fluid"
							/>
						</div>
						<div className="col-md-8 shadow p-3 mb-5 bg-white rounded">
							<ul className="list-unstyled components mt-3 ml-4">
								<li className="profile-li">
									<span className="profile-span">Name:</span> Orlando Rafael
								</li>
								<li className="profile-li">
									<span className="profile-span">Last name:</span> Monrroy Rangel
								</li>
								<li className="profile-li">
									<span className="profile-span">Rut or ID:</span> 25.819.289-3
								</li>
								<li className="profile-li">
									<span className="profile-span">
										Address <FontAwesomeIcon icon={faEdit} className="ml-2 mr-2" /> :
									</span>{" "}
									Av Irarrazabal
								</li>
								<li className="profile-li">
									<span className="profile-span">
										Phone number <FontAwesomeIcon icon={faEdit} className="ml-2 mr-2" /> :
									</span>{" "}
									948042315
								</li>
								<li className="profile-li">
									<span className="profile-span">Email:</span> monroyorlando.36@gmail.com
								</li>
								<li className="profile-li">
									<span className="profile-span">T-Shirt Size:</span> M
								</li>
							</ul>
						</div>
					</div>
					<div className="row text-center mb-2">
						<div className="col-md-12 shadow p-3 mb-5 bg-white rounded">
							<p>Upload your ID Card or RUT</p>
							<input type="file" />
						</div>
					</div>
				</div>
				<Footer />
			</SideNav>
		</>
	);
};

export default Profile;
