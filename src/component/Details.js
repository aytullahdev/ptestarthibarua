import React from "react";

const Details = ({ id, title, image,category, price, rate, desc,  }) => {
  return (
    <div>
      <div className="w-full grid grid-cols-2 shadow bg-white rounded-md p-2">
        <div >
          <img
            src={image}
            alt=""
            className="h-[400px] w-2/4"
          />
        </div>
        <div className="">
          <div className="py-2 px-2">
            <h4 className="text-xl text-left uppercase font-semibold py-2 ">
              {title}
            </h4>
            
            <p className="text-left text-xl font-semibold capitalize py-2">
                {category}
            </p>
            <p className="text-lg text-left text-gray-600">
              {desc}
            </p>
           
          </div>
          <div className="px-2">
            <div className="flex justify-around text-2xl uppercase ">
              <div className="text-left mr-4 py-2">
                Price:{" "}
                <span className=" text-2xl py-2 px-2 rounded-full text-black">
                  {price}
                </span>
              </div>
              <div className="text-left mr-4 py-2">
                Ratings:{" "}
                <span className=" text-2xl py-2 px-2 rounded-full text-black">
                 {rate}
                </span>
              </div>
            </div>
            <div className="grid">
              <button
                className="bg-green-500 text-white text-xl py-2 px-2 hover:bg-green-600 rounded my-3"
                onClick={() => {
                  console.log("HACKED");
                }}
              >
                BUY NOW
              </button>
              <button className="bg-orange-400 text-lg uppercase hover:bg-orange-500 text-white py-2 px-2 rounded">
                🛒 ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
