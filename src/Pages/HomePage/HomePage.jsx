import React from "react";
import Header from "../../Components/Header";
import Hero from "../../Components/Hero";
import RendezVous from "../../Components/RendezVous";
import Question from "../../Components/Question";
import Apropos from "../../Components/Apropos";
import Footer from "../../Components/Footer";
import "./HomePage.css"

const HomePage = () => {
    return(
        <>
            <Hero />
            <RendezVous />
            <Question />
            <Apropos />
        </>
    )
}

export default HomePage