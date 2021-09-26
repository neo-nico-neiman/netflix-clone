import { IconContext } from "react-icons";
import {
	TiThumbsUp,
	TiMediaPlayOutline,
	TiThLargeOutline,
	TiMessage,
} from "react-icons/ti";

const Icons = {
	thumbs: (
		<IconContext.Provider
			value={{ color: "inherit", className: "react-icons" }}
		>
			<TiThumbsUp />
		</IconContext.Provider>
	),
	play: (
		<IconContext.Provider
			value={{ color: "inherit", className: "react-icons" }}
		>
			<TiMediaPlayOutline />
		</IconContext.Provider>
	),
	grid: (
		<IconContext.Provider
			value={{ color: "inherit", className: "react-icons" }}
		>
			<TiThLargeOutline />
		</IconContext.Provider>
	),
	subtitles: (
		<IconContext.Provider
			value={{ color: "inherit", className: "react-icons" }}
		>
			<TiMessage />
		</IconContext.Provider>
	),
};

export default Icons;
