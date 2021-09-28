import React from "react";
import { useLocation } from "react-router-dom";
import { TitleMedium, TitleXLarge } from ".";

const ComingSoon = () => {
	const location = useLocation();

	return (
		<div className='coming-soon'>
			<TitleMedium>{location.pathname}</TitleMedium>
			<TitleXLarge>Coming Soon</TitleXLarge>
		</div>
	);
};

export { ComingSoon };
