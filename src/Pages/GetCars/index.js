import React from "react";
import Form from "../../Components/form/Form";
import NavbarComp from "../../Components/navbar/Navbar";
import Footer from "../Home/Footer";
import Hero from "../GetCars/Hero";
import CarCard from "../../Components/car-card/Card";

const GetCars = () => {
	return (
		<div>
			<NavbarComp />
			<main>
				<Hero />
				<Form />
				<CarCard />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default GetCars;
