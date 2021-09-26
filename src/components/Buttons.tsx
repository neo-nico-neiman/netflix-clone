import React from "react";

type BaseButtonProps = {
	label: string;
	onClick: any;
	className: string;
};

const BaseButton: React.FC<BaseButtonProps> = ({
	label,
	onClick,
	className,
}) => {
	return (
		<button className={className} onClick={onClick}>
			{label}
		</button>
	);
};

const ButtonSecondary: React.FC<BaseButtonProps> = ({
	label,
	onClick,
	className,
}) => {
	return (
		<BaseButton
			label={label}
			onClick={onClick}
			className={`button-secondary ${className}`}
		></BaseButton>
	);
};
export { BaseButton, ButtonSecondary };
