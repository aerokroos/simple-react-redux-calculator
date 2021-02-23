import React from "react";
import "../assets/NumberBtn.css";

const NumberBtn = ({ number, click }) => {
  return (
    <button className="number" onClick={click}>
      {number}
    </button>
  );
};

export default NumberBtn;
