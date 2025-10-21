import OpenAccount from "../OpenAccount";
import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./pricing";
import Stats from "./Stats";
import Footer from "../Footer";
import Navbar from "../Navbar";


export default function HomePage(){
    return(
        <>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>

        </>
    )
}