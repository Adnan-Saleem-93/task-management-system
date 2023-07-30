import React from "react";

const PrimaryButton = ({
	action = null,
	id = "",
	type = "button",
	text = "",
}) => {
	return (
		<button className="primary--button" onClick={action} id={id} type={type}>
			{text}
		</button>
	);
};

export default PrimaryButton;
