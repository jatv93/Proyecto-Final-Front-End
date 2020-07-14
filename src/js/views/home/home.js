import React from "react";
import rigoImage from "../../../img/logo-home.png";
import "../../../styles/home.scss";
import { Navbar } from "../../component/navbar";

export const Home = () => (
	<>
		<Navbar />
		<div className="text-center mt-5">
			<p>
				<img src={rigoImage} />
			</p>
		</div>
	</>
);
