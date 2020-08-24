import React from "react";
import rigoImage from "../../../img/logo-home.png";
import "../../../styles/home.scss";
import { Navbar } from "../../component/navbar";
import { Footer } from "../../component/footer";

export const Home = () => (
	<>
		<Navbar />
		<div className="text-center mt-5 ">
			<img src={rigoImage} className="img-fluid" alt="Responsive image" />
		</div>
		<Footer />
	</>
);
