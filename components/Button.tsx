import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  qty: number;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, qty }) => {

  return (
    <button className='px-8 py-2.5 border border-white rounded-full text-white uppercase font-bold text-lg' onClick={onClick}>
      {text} ({qty})
    </button>
  )
}

export default Button;