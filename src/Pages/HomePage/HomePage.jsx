import React from 'react';
import BannerComponent from "../../Components/BannerComponent/BannerComponent.jsx";
import FeaturedProductsComponent from "../../Components/FeaturedProductsComponent/FeaturedProductsComponent.jsx";
import HowItWorksComponent from "../../Components/HowItWorksComponent/HowItWorksComponent.jsx";


const HomePage = () => {
    return (
        <div>
            <BannerComponent></BannerComponent>
            <FeaturedProductsComponent></FeaturedProductsComponent>
            <HowItWorksComponent></HowItWorksComponent>
        </div>
    );
};

export default HomePage;
