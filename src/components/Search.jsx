import React from "react";
import { Input } from "@mui/material";

export function Search() {
	return (
		<div className="div-container">
			<div className="mx-auto px-4 text-center">
				<h1 className="text-7xl font-bold text-red-500">Buscador</h1>
				<Input placeholder="Buscar Pokemon" />
			</div>
		</div>
	);
}

//Con MATERIAL-UI Y TAILWINDCSS
