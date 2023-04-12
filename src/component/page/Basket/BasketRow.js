import React from 'react';
import {FcFullTrash} from "react-icons/fc";
import {AiOutlineMinus} from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {ADD_TO_BASKET, DELETE_FROM_BASKET, INCREASE_QUANTITY} from "../../redux/ActionTtypes";

const BasketRow = ({el}) => {
    const deleteFromBasket = (id) => {
        dispatch({type:DELETE_FROM_BASKET,payload:id})
    }
    const increaseQuantity= (id) =>{
        dispatch({type:INCREASE_QUANTITY,payload:id})
    }
    const decreaseQuantity = (product) => {
        dispatch({type:ADD_TO_BASKET,payload:product})
    }
    const dispatch= useDispatch()
    return (
        <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                { el.title}
            </th>

            <td className="px-6 py-4">
                <img src={el.image} width={45} alt=""/>
            </td>
            <td className="px-6 py-4 flex items-center mt-4">
                <span onClick={() => increaseQuantity(el.id) }
                    className= {`mx-2 cursor-pointer ${el.quantity > 1 ? "text-cyan-400" : 'opacity-50'}`}>
                    <AiOutlineMinus/>
                </span>
                {el.quantity}
                <span onClick={() => decreaseQuantity(el) }
                    className='mx-2 cursor-pointer text-cyan-400' >
                    <AiOutlinePlus/>
                </span>
            </td>
            <td className="px-6 py-4">
                ${el.price * el.quantity}
            </td>
            <td className="mx-6 text-xl my-4">
                <FcFullTrash onClick={() => deleteFromBasket(el.id)}
                             className='cursor-pointer' />
            </td>
        </tr>
    );
};

export default BasketRow;