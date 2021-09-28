import React from "react";
import { useLocation } from "react-router-dom";
import { TitleMedium, TitleXLarge } from ".";

const CommingSoon = () => {
	const location = useLocation();

	return (
		<div className='comming-soon'>
			<TitleMedium>{location.pathname}</TitleMedium>
			<TitleXLarge>Comming Soon</TitleXLarge>
		</div>
	);
};

export { CommingSoon };
