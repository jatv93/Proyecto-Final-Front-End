import React from "react";

export const PaymentDataForm = () => {
	return (
		<div className="row">
			<div className="col-lg-5 mt-4 offset-lg-2">
				<p>
					<strong>Valor del Programa:</strong> 2.415.000 CLP
				</p>

				<p>
					<strong>Descuento o Beca:</strong> 10%
				</p>
				<p>
					<strong>Total a Pagar:</strong> 2.173.500 CLP
				</p>
			</div>
			<div className="col-lg-4 mt-4">
				<p>
					<strong>Monto Pagado:</strong> 2.000.000 CLP
				</p>
				<p>
					<strong>Monto por Pagar:</strong> 173.500 CLP
				</p>
				<p>
					<strong>Fecha Último Pago:</strong> 06/07/2020
				</p>
			</div>
		</div>
	);
};
