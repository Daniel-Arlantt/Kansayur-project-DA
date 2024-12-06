import React, { useState } from "react";
import { PopupAdd } from "../components/PopupAdd";
import CarrotLogo from "../images/CarrotLogo.png";

export const Admin = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handleOpenPopup = () => {
    setIsOpenPopup(true);
  };
  const handleClosePopup = () => {
    setIsOpenPopup(false);
  };

  return (
    <div className="relative flex justify-center">
      <div className="absolute z-0 bg-[#53b97c] -left-20 w-[130vw] h-[40vh] rounded-b-[230px] rounded-bl-[200px]"></div>

      <div className="w-[100vw] h-[100vh] absolute inset-0 flex items-center justify-center content-center  z-10">
        {isOpenPopup && <PopupAdd handleClosePopup={handleClosePopup} />}
      </div>

      <div className="grid z-20 justify-center items-center">

        <div className="flex justify-center items-center gap-2 py-2">
          <h1 className="main-tittle text-white text-2xl">Kangsayur</h1>
          <img className="w-7 h-7" src={CarrotLogo} alt="Carrot Logo" />
        </div>

        <div className="flex justify-evenly items-around w-[100vw]">

          <button
            onClick={handleOpenPopup}
            className="bg-white text-gray-400 w-10 p-2 text-center rounded-lg"
          >
            +
          </button>

          <input
            type="text"
            placeholder="Search for fruits, vegetables, groceries..."
            className="bg-white placeholder-gray-400 w-[70vw] rounded-lg p-2"
          />
        </div>
      </div>
    </div>
  );
};
