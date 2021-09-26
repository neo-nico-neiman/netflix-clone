import React from "react";
import { MenuItem, NavBarItem } from "../models/navBar.model";
import { v4 as uuidv4 } from "uuid";
import HoverMenu from "./HoverMenu";

const hoverMenuItems: MenuItem[] = [
	{ label: "Profile", link: "" },
	{ label: "Contact", link: "" },
	{ label: "Logout", link: "" },
];

type NabBarProps = {
	menuItems: NavBarItem[];
};

const NavBar: React.FC<NabBarProps> = ({ menuItems }) => {
	return (
		<div className='navBar'>
			<div className='navBar-logo-and-items'>
				<p>Logo</p>
				<ul>
					{menuItems.map((item: NavBarItem) => (
						<li key={uuidv4()}>{item.label}</li>
					))}
				</ul>
			</div>
			<HoverMenu label={"User"} menuItem={hoverMenuItems} />
		</div>
	);
};

export default NavBar;
