import React from "react";
import { NavBarItem } from "../models/navBar.model";
import { v4 as uuidv4 } from "uuid";

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
			<div className='navBar-avatar'>Avatar</div>
		</div>
	);
};

export default NavBar;
