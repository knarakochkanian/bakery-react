import React from "react";
import FreshBakery from "./FreshBakery";
import SpecialMoments from './SpecialMoments';
import BakedWithLove from "./BakedWithLove";
import Products from "./Products";
import Video from "./Video";
import Slider from "./Slider";
import Footer from "../Footer/Footer";

export default function HomePage(){
    return (
        <>
            <FreshBakery/>
            <SpecialMoments/>
            <Slider/>
            <BakedWithLove/>
            <Video/>
            <Products/>
            <Footer/>
        </>
    )


}
