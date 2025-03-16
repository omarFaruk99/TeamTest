import React from 'react';
import BannerComponent from "../../Components/BannerComponent/BannerComponent.jsx";
import ProductsComponent from "../../Components/ProductsComponent/ProductsComponent.jsx";
import HowItWorksComponent from "../../Components/HowItWorksComponent/HowItWorksComponent.jsx";


const HomePage = () => {
    return (
        <div>
            <BannerComponent></BannerComponent>
            <ProductsComponent></ProductsComponent>
            <HowItWorksComponent></HowItWorksComponent>
        </div>
    );
};

export default HomePage;
