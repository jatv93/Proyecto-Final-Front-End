import React from "react";
import { Button, UncontrolledCollapse, Card, CardBody } from "reactstrap";
import PropTypes from "prop-types";
import "./sidenav.css";

const SideNav = props => {
	console.log(props);
	return (
		<>
			<div className="wrapper">
				<nav className="sidenav">
					<div className="sidenav-body">
						<div className="sidenav-header text-center">
							<h3 className="sidenav-title">4Geeks</h3>
							<p className="sidenav-title">Internal Student Profile</p>
						</div>
						<div className="divider"></div>
						<ul className="list-unstyled components">
							{props.links.map((item, i) => {
								console.log(item);
								return (
									<li key={i}>
										<Button id="toggler" color="warning" size="lg" block className="sidenav-btn">
											{item}
										</Button>
									</li>
								);
							})}
							<li>
								<Button id="toggler" color="warning" size="lg" block className="sidenav-btn">
									Cerrar Sesion
								</Button>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<div id="content">{props.children}</div>
		</>
	);
};

export default SideNav;

SideNav.propTypes = {
	links: PropTypes.array,
	children: PropTypes.any
};
