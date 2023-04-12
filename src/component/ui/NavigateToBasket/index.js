import React from 'react';
import {SlBasketLoaded} from "react-icons/sl";
import {useNavigate} from "react-router-dom";

const NavigateToBasket = () => {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate('/basket')}
                className="  flex items-center    text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg  my-4 text-sm px-4 py-2.5 ">
            перейти в &nbsp; <SlBasketLoaded/>
        </button>
    );
};

export default NavigateToBasket;