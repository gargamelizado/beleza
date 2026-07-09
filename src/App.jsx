import { useState } from "react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Topbar from "./components/topbar/Topbar";
import Header from "./components/header/Header";

export default function App(){
	const [page, setPage] = useState("home");
	return (
		<div className="app-shell">
			<Topbar />
			<Header page={page} setPage={setPage} />
			<main className="page-shell">
				{page === 'home' && <Home />}
				{page === 'services' && <Services />}
				{page === 'about' && <About />}
				{page === 'contact' && <Contact />}
			</main>
		</div>
	)
}