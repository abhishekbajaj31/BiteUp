import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/CartSlices";

const ItemCart = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(
            removeFromCart({
              id,
              img,
              name,
              price,
              qty,
            })
          );
        }}
        className="absolute right-7 text-gray-600 cursor-pointer"
      />
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQuantity({ id })) : (qty = 0)
              }
              className="order-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500
               hover:border-none rounded-md p-1 text-xl tranition-all ease-linear cursor-pointer"
            ></AiOutlineMinus>
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQuantity({ id })) : (qty = 0)
              }
              className="order-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 
              hover:border-none rounded-md p-1 text-xl tranition-all ease-linear cursor-pointer"
            ></AiOutlinePlus>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
