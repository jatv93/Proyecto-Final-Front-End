import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const SearchBar = ({ onChange }) => (
	<>
		<div className="ml-auto">
			<form className="form-inline my-2 my-lg-0">
				<input
					className="form-control mr-sm-2"
					type="text"
					placeholder="Search..."
					onChange={e => onChange && onChange(e.target.value)}
				/>
			</form>
		</div>
	</>
);

SearchBar.propTypes = {
	onChange: PropTypes.func
};

SearchBar.defaultProps = {
	onChange: null
};
