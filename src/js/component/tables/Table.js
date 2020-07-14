import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { SearchBar } from "../searchBar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Table = ({ list, searchFields, columns }) => {
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
											<Link to={"/staff/files/" + item.breathecode_id}>
												<td>ver</td>
											</Link>
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

Table.propTypes = {
	list: PropTypes.any,
	searchFields: PropTypes.any,
	columns: PropTypes.array
};
Table.defaultProps = {
	searchFields: false,
	columns: []
};
