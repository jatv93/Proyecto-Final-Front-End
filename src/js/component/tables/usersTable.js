import React, { useContext, useState } from "react";
import { SearchBar } from "../searchBar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export const UsersTable = ({ list, searchFields, columns }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [stortingColumn, setSortingColumn] = useState(null);

	return (
		<div className="row">
			<div className="col-lg-12">
				<SearchBar onChange={value => setSearchTerm(value)} />
				<br />
				<br />
				<table className="table">
					<thead className="thead-dark">
						<tr className="text-center">
							{columns.map(c => (
								<th key={c} scope="col" onClick={() => setSortingColumn(c)}>
									{c}
								</th>
							))}
							<th scope="col"> </th>
						</tr>
					</thead>
					<tbody>
						{list
							.filter(item => {
								for (let i = 0; i < searchFields.length; i++)
									if (item[searchFields[i]].toLowerCase().includes(searchTerm.toLowerCase()))
										return true;

								return false;
							})
							.sort((itemA, itemB) => {
								return itemA[stortingColumn] > itemB[stortingColumn] ? 1 : -1;
							})
							.map((item, index) => {
								return (
									<>
										<tr className="text-center" key={index}>
											{columns.map(c => (
												<th key={c}>{item[c]}</th>
											))}
											<FontAwesomeIcon icon={faEdit} className="mt-2 mr-2" />

											<FontAwesomeIcon icon={faTrash} className="ml-2" />
										</tr>
									</>
								);
							})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

UsersTable.propTypes = {
	list: PropTypes.any,
	searchFields: PropTypes.any,
	columns: PropTypes.array,
	scope: PropTypes.any
};
UsersTable.defaultProps = {
	searchFields: false,
	columns: [],
	scope: ""
};
