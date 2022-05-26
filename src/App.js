import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import GetCars from "./Pages/GetCars";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cars" element={<GetCars />} />
			</Routes>
		</div>
	);
}

export default App;
