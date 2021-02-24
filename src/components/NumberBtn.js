import React from "react";
import "../assets/NumberBtn.css";
import "../assets/Btn.css";

const NumberBtn = ({ number, click }) => {
  return (
    <button className="number" onClick={click}>
      {number}
    </button>
  );
};

export default NumberBtn;
