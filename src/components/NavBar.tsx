import React from "react";
import { MenuItem, NavBarItem } from "../models/navBar.model";
import { v4 as uuidv4 } from "uuid";
import HoverMenu from "./HoverMenu";
import { Link } from "react-router-dom";
import Icons from "../utils/Icons";
import Logo from "./Logo";

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
				<p>
					<Link to='/home'>
						<Logo />
					</Link>
				</p>
				<ul>
					{menuItems.map((item: NavBarItem) => (
						<li key={uuidv4()}>
							<Link to={item.url}>{item.label}</Link>
						</li>
					))}
				</ul>
			</div>
			<HoverMenu label={"User"} menuItem={hoverMenuItems} />
		</div>
	);
};

export default NavBar;
