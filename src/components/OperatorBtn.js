import React from "react";
import "../assets/OperatorBtn.css";

const OperatorBtn = ({ operator, className, click }) => {
  return (
    <button className={className} onClick={click}>
      {operator}
    </button>
  );
};

export default OperatorBtn;
