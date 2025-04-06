import React from "react";

const Button = ({ title }: { title: string }) => {
  return (
    <button className="text-white text-xl bg-primary rounded-full py-2 px-7 hover:border-primary border-transparent transition-all duration-300 ease-in-out hover:text-primary border hover:bg-white">
      {title}
    </button>
  );
};

export default Button;
