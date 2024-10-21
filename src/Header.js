import { useState } from "react";

const Header = () => {
  const [activeButton, setActiveButton] = useState("WEEK");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <header className="bg-green-600 w-11/12 rounded-full h-20 flex justify-between items-center">
      <h1 className="text-xl ml-10 text-white">Expense Tracker</h1>
      <div className="space-x-4 mr-10 text-white">
        <button
          onClick={() => handleButtonClick("WEEK")}
          className={`px-4 py-2 rounded-lg ${
            activeButton === "WEEK"
              ? "bg-white text-green-600"
              : "text-white hover:opacity-70 transition ease-in-out duration-100"
          }`}
        >
          WEEK
        </button>
        <button
          onClick={() => handleButtonClick("1 MONTH")}
          className={`px-4 py-2 rounded-lg ${
            activeButton === "1 MONTH"
              ? "bg-white text-green-600"
              : "text-white hover:opacity-70 transition ease-in-out duration-100"
          }`}
        >
          1 MONTH
        </button>
        <button
          onClick={() => handleButtonClick("3 MONTHS")}
          className={`px-4 py-2 rounded-lg ${
            activeButton === "3 MONTHS"
              ? "bg-white text-green-600"
              : "text-white hover:opacity-70 transition ease-in-out duration-100"
          }`}
        >
          3 MONTHS
        </button>
        <button
          onClick={() => handleButtonClick("6 MONTHS")}
          className={`px-4 py-2 rounded-lg ${
            activeButton === "6 MONTHS"
              ? "bg-white text-green-600"
              : "text-white hover:opacity-70 transition ease-in-out duration-100"
          }`}
        >
          6 MONTHS
        </button>
      </div>
    </header>
  );
};

export default Header;
