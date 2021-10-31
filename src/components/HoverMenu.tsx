import React, { useState, MouseEvent } from "react";
import { MenuItem } from "../models/navBar.model";
import { v4 as uuidv4 } from "uuid";
import { IconTypes } from "../models/icons.enum";
import Icons from "../utils/Icons";
import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowsDimension";
import { ScreenSize } from "../models/screenSize.enum";

type HoverMenuProps = {
	label?: string;
	icon?: IconTypes;
	menuItem: MenuItem[];
	openLeft?: boolean;
};

const HoverMenu: React.FC<HoverMenuProps> = ({
	label,
	menuItem,
	icon,
	openLeft = true,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	// const nodeRef = useRef<HTMLHeadingElement>(null);

	// const handleClickOutside = () => {
	// 	setIsOpen(false);
	// };

	// useOnClickOutside(nodeRef, handleClickOutside);

	const handleClickInside = (event: MouseEvent) => {
		event.stopPropagation();
		setIsOpen(false);
	};

	const screenSize = useWindowDimensions();

	return (
		<div className='hover-menu-wrapper'>
			<div
				className={
					screenSize === ScreenSize.SM
						? "hover-menu-label-mobile"
						: "hover-menu-label"
				}
				onClick={() => setIsOpen(!isOpen)}
			>
				{icon && Icons[icon]}
				{label && label}
			</div>
			{isOpen && (
				<ul
					className={`hover-menu-items ${
						openLeft
							? screenSize === ScreenSize.SM
								? "left-mobile"
								: "left"
							: ""
					}`}
				>
					{menuItem.map((item: MenuItem) => (
						<li key={uuidv4()}>
							<Link onClick={handleClickInside} to={item.link}>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default HoverMenu;
