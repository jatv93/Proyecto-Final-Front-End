import React from "react";

export const footer = () => {
	return (
		<footer className="navFooter">
				<button className="btn btn-outline-danger my-2 my-sm-0" type="submit">
					Volver
				</button>
				<div className="form-inline">
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
						Next
					</button>
				</div>
			</footer>
	);
};