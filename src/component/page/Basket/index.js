import React from 'react';
import {useSelector} from "react-redux";
import BasketRow from "./BasketRow";
import BasketTable from "./BasketTable";
import {Link} from "react-router-dom";

const Basket = () => {
    const {basket} = useSelector(s => s)



    return (

     <div className='container'>
         <div className="relative my-14 overflow-x-auto">

             {
                 basket.length ?    <BasketTable/> :
                    <div className='text-center'>
                        EMPTY BASKET
                        <Link to='/'>
                            <div className='flex justify-center bg-gray-700  text-white items-center w-[30%] mx-auto border-2 h-16 my-20'>
                                ADD PRODUCTS +</div>
                        </Link>

                    </div>
             }

         </div>
     </div>

    );
};

export default Basket;