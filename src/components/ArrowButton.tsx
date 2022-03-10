/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";

const ArrowButton = ({ clickHandler, ArrowSVG }: ArrowButtonProps) => {
  return (
    <button
      className="p-1 transition rounded hover:bg-slate-600 bg-slate-400"
      onClick={clickHandler}>
      <span className="sr-only">slider button</span>
      <ArrowSVG className="w-6 h-6 text-white" />
    </button>
  );
};

export default ArrowButton;
