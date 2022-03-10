/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Review = (props: ReviewProps) => {
  const { name, job, image, text } = props;
  return (
    <>
      <div className="p-1 mx-auto mb-4 rounded-full shadow-lg bg-slate-400 w-36 h-36">
        <img
          className="object-cover w-full h-full rounded-full"
          src={image}
          alt="Person Image"
        />
      </div>
      <div className="mx-auto mb-6 w-fit">
        <h2 className="text-xl font-bold text-center capitalize text-amber-800">
          {name}
        </h2>
        <span className="block w-full font-bold text-center capitalize">
          {job}
        </span>
      </div>
      <p className="mb-6 text-center text-slate-600">{text}</p>
      <FaQuoteRight className="w-10 h-10 mx-auto fill-amber-800" />
    </>
  );
};

export default Review;
