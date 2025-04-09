import React from "react";
import { Route, Routes } from "react-router";
import { CursosScreens } from "../screens/CursosScreens/CursosScreens";
import { EstudiantesScreens } from "../screens/EstudiantesScreens/EstudiantesScreens";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<CursosScreens />} />
            <Route path="/curso/:id" element={<EstudiantesScreens />} />
            <Route path="/curso/" element={<EstudiantesScreens />} />
		</Routes>
	);
};
