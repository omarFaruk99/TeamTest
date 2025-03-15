import React from 'react';
import BannerComponent from "../../Components/BannerComponent/BannerComponent.jsx";
import ProductsComponent from "../../Components/ProductsComponent/ProductsComponent.jsx";


const HomePage = () => {
    return (
        <div>
            <BannerComponent></BannerComponent>
            <ProductsComponent></ProductsComponent>
        </div>
    );
};

export default HomePage;
