import React from "react";
import Icons from "../utils/Icons";

type BaseButtonProps = {
	label: string;
	onClick: any;
	className: string;
	icon?: "thumbs" | "play" | "grid" | "subtitles";
};

const BaseButton: React.FC<BaseButtonProps> = ({
	label,
	onClick,
	className,
	icon,
}) => {
	return (
		<button className={className} onClick={onClick}>
			{icon && Icons[icon]}
			{label}
		</button>
	);
};

const ButtonSecondary: React.FC<BaseButtonProps> = ({
	label,
	onClick,
	className,
	icon,
}) => {
	return (
		<BaseButton
			label={label}
			onClick={onClick}
			className={`button-secondary ${className}`}
			icon={icon}
		></BaseButton>
	);
};

const ButtonHollowBorder: React.FC<BaseButtonProps> = ({
	label,
	onClick,
	className,
	icon,
}) => {
	return (
		<BaseButton
			label={label}
			onClick={onClick}
			className={`button-hollow-border ${className}`}
			icon={icon}
		></BaseButton>
	);
};
export { BaseButton, ButtonSecondary, ButtonHollowBorder };
