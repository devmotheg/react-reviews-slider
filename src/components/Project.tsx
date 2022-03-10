/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import ArrowButton from "./ArrowButton";
import Review from "./Review";
import slides from "../data/slides";

const Project = () => {
	const [currIdx, setCurrIdx] = useState(0);

	const prevIdx = (currIdx - 1 + slides.length) % slides.length;
	const nextIdx = (currIdx + 1) % slides.length;

	useEffect(() => {
		const slider = setInterval(() => setCurrIdx(nextIdx), 2500);
		return () => clearInterval(slider);
	}, [currIdx]);

	return (
		<>
			<h1 className="relative py-4 mb-12 text-4xl font-bold capitalize after:w-2/4 after:h-1 after:absolute after:bottom-0 after:left-2/4 after:-translate-x-1/2 after:bg-amber-800">
				our reviews
			</h1>
			<div className="max-w-[50rem] overflow-hidden relative">
				<div className="relative left-0 transition-all opacity-1">
					{slides.map((r, i) => {
						let styling = "transition-all duration-500";
						if (currIdx !== i) styling += " absolute top-0 opacity-0";
						if ((currIdx > i && nextIdx !== i) || prevIdx === i)
							styling += " translate-x-full";
						if ((currIdx < i && prevIdx !== i) || nextIdx === i)
							styling += " -translate-x-full";

						return (
							<div key={r.id} className={styling}>
								<Review {...r} />
							</div>
						);
					})}
				</div>
				<div className="absolute flex justify-between w-full -translate-y-1/2 top-2/4">
					<ArrowButton
						clickHandler={() => {
							setCurrIdx(prevIdx);
						}}
						ArrowSVG={FiChevronLeft}
					/>
					<ArrowButton
						clickHandler={() => {
							setCurrIdx(nextIdx);
						}}
						ArrowSVG={FiChevronRight}
					/>
				</div>
			</div>
		</>
	);
};

export default Project;
