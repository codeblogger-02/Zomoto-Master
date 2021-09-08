import React from "react";



//Components 
import Navbar from "../Components/Navbar";

const HomeLayout = (props) => {
return (
    <>
        <Navbar />
    <div className="container mx-auto px-4 lg:px-40">
    {props.children}
    </div>
    </>
)

};



export default HomeLayout;
