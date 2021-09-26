import React, { useEffect, useState } from "react";
import { MenuItem } from "../models/navBar.model";
import { v4 as uuidv4 } from "uuid";

type HoverMenuProps = {
	label: string;
	menuItem: MenuItem[];
};
const HoverMenu: React.FC<HoverMenuProps> = ({ label, menuItem }) => {
	const [isOpen, setIsOpen] = useState(false);
	const handleCLickOutside = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleCLickOutside);
		return () => {
			document.removeEventListener("mousedown", handleCLickOutside);
		};
	});

	return (
		<div>
			<div
				className={"hover-menu-label"}
				onMouseOver={() => setIsOpen(!isOpen)}
			>
				{label}
			</div>
			{isOpen && (
				<ul className={"hover-menu-items"}>
					{menuItem.map((item: MenuItem) => (
						<li key={uuidv4()}>{item.label}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default HoverMenu;
