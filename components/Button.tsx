import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className='invisible group-hover:visible' onClick={onClick}>
      {text}
    </button>
  )
}

export default Button;