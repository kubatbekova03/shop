import React from 'react';
import {SlBasketLoaded} from "react-icons/sl";
import {useDispatch} from "react-redux";

const AddToBasketBtn = ({product}) => {
    const dispatch = useDispatch()
    const addToBasket = (product) =>{
        dispatch({type:"ADD_TO_BASKET",payload:product})
    }
    return (
        <button onClick={() => addToBasket(product)}
                className=" flex items-center text-gray-900 bg-sky-600 from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100  dark:focus:ring-red-400 font-medium rounded-lg text-sm px-4 py-2.5 my-4   ">
            добавить в &nbsp; <SlBasketLoaded/>
        </button>
    );
};

export default  AddToBasketBtn;