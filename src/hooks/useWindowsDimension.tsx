import { useState, useEffect } from "react";

interface WindowDimentions {
	width: number;
	height: number;
}

function getWindowDimensions(): WindowDimentions {
	const { innerWidth: width, innerHeight: height } = window;

	return {
		width,
		height,
	};
}

export default function useWindowDimensions(): string {
	const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>(
		getWindowDimensions()
	);

	let screenSize = "";

	useEffect(() => {
		function handleResize(): void {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);

		return (): void => window.removeEventListener("resize", handleResize);
	}, []);

	if (windowDimensions.width <= 1200) screenSize = "xl";
	if (windowDimensions.width <= 992) screenSize = "lg";
	if (windowDimensions.width <= 768) screenSize = "md";
	if (windowDimensions.width <= 576) screenSize = "sm";

	return screenSize;
}
