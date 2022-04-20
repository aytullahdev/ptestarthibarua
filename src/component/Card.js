import React from "react";

const Card = ({ id, title, image, price, rate, desc, findProduct }) => {
  return (
    <div className="w-full shadow bg-white rounded-md p-2">
      <div>
        <img src={image} alt="" className="h-[400px] w-full" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="py-2 px-2">
          <h4 className="text-xs text-left uppercase font-semibold py-2 ">
            {title}
          </h4>
          <p className="text-sm text-left text-gray-600">
            {desc.slice(0, 100)}
          </p>
        </div>
        <div className="px-2">
          <div className="flex justify-around">
            <div className="text-left mr-4 py-2">
              Price:{" "}
              <span className="text-white py-2 px-2 rounded-full bg-orange-400">
                {price}
              </span>
            </div>
            <div className="text-left mr-4 py-2">
              Ratings:{" "}
              <span className="text-white py-2 px-2 rounded-full bg-orange-400">
                {rate}
              </span>
            </div>
          </div>
          <div className="grid">
            <button className="bg-green-500 text-white text-xl py-2 px-2 hover:bg-green-600 rounded my-3" onClick={()=>{
                findProduct(id);
            }}>
              BUY NOW
            </button>
            <button className="bg-orange-400 text-lg uppercase hover:bg-orange-500 text-white py-2 px-2 rounded">
              🛒 ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
