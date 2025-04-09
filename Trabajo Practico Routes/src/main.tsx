import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { AppRouter } from "./components/routes/AppRouter.tsx";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<AppRouter />
	</BrowserRouter>
);
