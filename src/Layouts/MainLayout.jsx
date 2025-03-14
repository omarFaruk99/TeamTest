import React from 'react';
import NavbarComponent from "../Components/NavbarComponent/NavbarComponent.jsx";
import FooterComponent from "../Components/FooterComponent/FooterComponent.jsx";
import {Outlet} from "react-router";
import {ToastContainer} from "react-toastify";

const MainLayout = () => {
    return (
        <div className={'container mx-auto min-h-screen flex flex-col'}>

            <NavbarComponent></NavbarComponent>

            <div className={'flex-grow'}>
                <Outlet></Outlet>
            </div>

            <FooterComponent></FooterComponent>

            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            ></ToastContainer>

        </div>
    );
};

export default MainLayout;
