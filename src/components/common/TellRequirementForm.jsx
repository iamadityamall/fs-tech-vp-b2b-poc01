import React, { useState } from "react";
import {
  GRADIENTS,
  BUTTON_STYLES,
  LABEL_STYLES,
  INPUT_STYLES,
} from "../../Constants"; // Import constants

const RequirementForm = () => {
  const [isBuy, setIsBuy] = useState(true);

  const handleBuyClick = () => setIsBuy(true);
  const handleSellClick = () => setIsBuy(false);

  return (
    <div
      className={`${GRADIENTS.tealToBlue} p-5 rounded-lg shadow-lg w-full max-w-7xl mx-auto`}
    >
      {/* Title and Radio Buttons */}
      <div className="flex items-end justify-start mb-3">
        <h2 className="text-xl font-bold text-white mr-3">
          Tell Us Your Requirement
        </h2>
        <p className="text-[10px] text-white font-bold">
          Best Rates | Working Capital | Delivery Anywhere
        </p>
      </div>
      <div className="bg-white p-6 rounded-md shadow-md">
        {/* Radio Buttons */}
        <div className="flex items-center mb-6">
          <button
            className={`flex items-center px-4 py-2 rounded-full border ${
              isBuy ? "border-green-400 bg-green-100" : "border-gray-300"
            }`}
            onClick={handleBuyClick}
          >
            <div
              className={`w-4 h-4 mr-2 rounded-full border ${
                isBuy ? "bg-green-400" : "bg-white"
              }`}
            ></div>
            Buy
          </button>
          <button
            className={`flex items-center ml-4 px-4 py-2 rounded-full border ${
              !isBuy ? "border-red-400 bg-red-100" : "border-gray-300"
            }`}
            onClick={handleSellClick}
          >
            <div
              className={`w-4 h-4 mr-2 rounded-full border ${
                !isBuy ? "bg-red-400" : "bg-white"
              }`}
            ></div>
            Sell
          </button>
        </div>

        {/* Form Fields with Labels */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <label className={LABEL_STYLES}>Enter Product</label>
            <select className={`${INPUT_STYLES} max-w-[120px]`}>
              <option>Select Product</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className={LABEL_STYLES}>Quantity</label>
            <input
              type="text"
              placeholder="Quantity"
              className={`${INPUT_STYLES} max-w-[100px]`}
            />
          </div>
          <div className="flex flex-col">
            <label className={LABEL_STYLES}>Company</label>
            <input
              type="text"
              placeholder="Enter Company"
              className={`${INPUT_STYLES} max-w-[150px]`}
            />
          </div>
          {!isBuy && (
            <div className="flex flex-col">
              <label className={LABEL_STYLES}>Company GST</label>
              <input
                type="text"
                placeholder="Company GST"
                className={`${INPUT_STYLES} max-w-[150px]`}
              />
            </div>
          )}
          <div className="flex flex-col">
            <label className={LABEL_STYLES}>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className={`${INPUT_STYLES} max-w-[150px]`}
            />
          </div>
          <div className="flex flex-col">
            <label className={LABEL_STYLES}>Mobile Number</label>
            <div className="flex items-center border rounded-md w-full max-w-[180px]">
              <select className="w-[70px] p-2 border-r rounded-l-md">
                <option>IN +91</option>
              </select>
              <input
                type="text"
                placeholder="Enter Mobile"
                className="w-full p-2 rounded-r-md"
              />
            </div>
          </div>
          <div className="flex flex-col w-[200px]">
            <label className="text-sm text-transparent">Submit</label>
            <button className={BUTTON_STYLES.primary}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementForm;
