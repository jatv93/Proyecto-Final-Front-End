import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SearchBar = () => {
	const { store } = useContext(Context);

	return (
		<div className="ml-auto">
			<form className="form-inline my-2 my-lg-0">
				<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
				<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
					Search
				</button>
			</form>
		</div>
	);
};
