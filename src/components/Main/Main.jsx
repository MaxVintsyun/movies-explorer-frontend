import { useRef } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";

function Main() {
    const aboutProjectRef = useRef();
    const techsRef = useRef();
    const aboutMe = useRef();

    const navTabElements = [
        {ref: aboutProjectRef, text: 'О проекте'},
        {ref: techsRef, text: 'Технологии'},
        {ref: aboutMe, text: 'Студент'}
    ];

    return(
        <>
            <Header />
            <main className="main">
                <Promo navTabElements={navTabElements} />
                <AboutProject ref={aboutProjectRef} />
                <Techs ref={techsRef} />
                <AboutMe ref={aboutMe} />
                <Portfolio />
            </main>
            <Footer />
        </>
    );
}

export default Main;