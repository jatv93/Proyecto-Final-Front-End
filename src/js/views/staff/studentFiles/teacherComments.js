import React, { Fragment, useContext } from "react";
import SideNav from "../../../component/sidenav";
import { Context } from "../../../store/appContext";

export const TeacherComments = () => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<SideNav links={store.sideBarContent.staff}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<h1 className="text-center">Comentarios del Profesor/Ayudante</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<h3>Fortalezas</h3>
							<ul>
								<li>Pregunta</li>
							</ul>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante,
								laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque
								efficitur aliquam sodales. Vestibulum eget sagittis magna.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<h3>Debilidades</h3>
							<ul>
								<li>Pregunta</li>
							</ul>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante,
								laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque
								efficitur aliquam sodales. Vestibulum eget sagittis magna.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<h3>Proyección del estudiante</h3>
							<ul>
								<li>Pregunta</li>
							</ul>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero ante,
								laciniaac nibh id, dapibus convallis massa. Cras sit amet dolor magna. Pellentesque
								efficitur aliquam sodales. Vestibulum eget sagittis magna.
							</p>
						</div>
					</div>
				</div>
			</SideNav>
		</Fragment>
	);
};
