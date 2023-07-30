import React from "react";

const Checkbox = () => {
	return (
		<div className="flex gap-2 cursor-pointer">
			<input
				className="peer relative shrink-0 appearance-none w-5 h-5 border-2 border-blue-500 rounded-sm bg-white checked:bg-blue-500"
				type="checkbox"
			/>
			<svg
				className="absolute w-5 h-5 text-white hidden peer-checked:block"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polyline points="20 6 9 17 4 12"></polyline>
			</svg>
		</div>
	);
};

export default Checkbox;
