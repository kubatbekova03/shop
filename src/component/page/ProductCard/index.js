import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import AddToBasketBtn from "../../ui/AddToBasketBtn";
import NavigateToBasket from "../../ui/NavigateToBasket";
import AddToFavoritesBtn from "../../ui/AddToFavoritesBtn";
import {ADD_TO_FAVORITES} from "../../redux/ActionTtypes";
import {AiFillHeart} from "react-icons/ai";


const ProductCard = ({product}) => {
     const [isLiked,setIsLiked] = useState(false)
    const dispatch = useDispatch()
    const {basket} = useSelector(s => s)
    const foundProduct = basket.some(el => el.id === product.id)
    const addToFavorites = (item) => {
        dispatch({type: ADD_TO_FAVORITES, payload: item})
      if (!product.isLiked){
          setIsLiked(true)
          setTimeout(() => setIsLiked(false) , 1000)
      }
    }
    return (
        <div
            className="max-w-sm bg-white   basis-1/5 mx-7 my-5  rounded-lg shadow dark:bg-gray-800 ">
            <div className='relative'>

                <img onDoubleClick={() => addToFavorites(product)} className="rounded-t-lg" width={600}
                     src={product.image} alt=""/>
                   <AiFillHeart className={`transition-[.1s] absolute ${isLiked ? "scale-1": "scale-0"} top-[50%] left-[40%]  text-red-600 text-6xl rotate-[-12deg]`}/>

            </div>

            <div className="p-3 text-center">
                <a href="#">
                    <h5 className="mb-1 text-xl text-[15px] font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                </a>
                <p className="mb-3 font-normal text-[15px] text-gray-700 dark:text-gray-400">{product.description}</p>
                <p className="mb-3 font-normal text-[20px] text-gray-700 dark:text-gray-400">{product.price}SOM</p>
            </div>

            <div className='flex items-center justify-evenly mx-8 '>
                <AddToFavoritesBtn product={product}/>
                {
                    foundProduct ? <NavigateToBasket/> :
                        <AddToBasketBtn product={product}/>
                }
            </div>

        </div>

    );
};

export default ProductCard;