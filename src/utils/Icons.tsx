import { IconContext } from "react-icons";
import {
	TiThumbsUp,
	TiMediaPlayOutline,
	TiThLargeOutline,
	TiMessage,
	TiEyeOutline,
	TiThMenuOutline,
	TiUserOutline,
} from "react-icons/ti";
import { IconTypes } from "../models/icons.enum";

const Icons = {
	[IconTypes.THUMBS]: (
		<IconContext.Provider
			value={{ color: "inherit", className: "react-icons" }}
		>
			<TiThumbsUp />
		</IconContext.Provider>
	),
	[IconTypes.PLAY]: (
		<IconContext.Provider
			value={{ color: "inherit", className: "react-icons" }}
		>
			<TiMediaPlayOutline />
		</IconContext.Provider>
	),
	[IconTypes.GRID]: (
		<IconContext.Provider
			value={{ color: "inherit", className: "react-icons" }}
		>
			<TiThLargeOutline />
		</IconContext.Provider>
	),
	[IconTypes.SUBTITLES]: (
		<IconContext.Provider
			value={{ color: "inherit", className: "react-icons" }}
		>
			<TiMessage />
		</IconContext.Provider>
	),
	[IconTypes.EYE]: (
		<IconContext.Provider
			value={{ color: "inherit", className: "react-icons" }}
		>
			<TiEyeOutline />
		</IconContext.Provider>
	),
	[IconTypes.MENU]: (
		<IconContext.Provider
			value={{ color: "inherit", className: "react-icons" }}
		>
			<TiThMenuOutline />
		</IconContext.Provider>
	),
	[IconTypes.USER]: (
		<IconContext.Provider
			value={{ color: "inherit", className: "react-icons" }}
		>
			<TiUserOutline />
		</IconContext.Provider>
	),
};

export default Icons;
