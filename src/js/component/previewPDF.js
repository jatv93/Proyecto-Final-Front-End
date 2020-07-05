import React from "react";
import Viewer from "@phuocng/react-pdf-viewer";
import { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

export const PreviewPDF = () => {
	return (
		<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
			<div
				style={{
					height: "490px",
					width: "60%",
					marginTop: "20px",
					display: "block",
					marginLeft: "auto",
					marginRight: "auto"
				}}>
				<Viewer fileUrl="https://arxiv.org/pdf/quant-ph/0410100.pdf" />
			</div>
		</Worker>
	);
};
