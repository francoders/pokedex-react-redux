import React from "react";
import { Search } from "./components/Search";

export default function App() {
	return (
		<div>
			<div class="div-contenedor container mx-auto px-4 text-center">
				<h1 className="text-7xl font-bold text-red-500">App Pokemon</h1>
				<Search />
			</div>
		</div>
	);
}
