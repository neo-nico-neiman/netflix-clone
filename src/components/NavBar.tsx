import React from "react";
import { MenuItem, NavBarItem } from "../models/navBar.model";
import { v4 as uuidv4 } from "uuid";
import HoverMenu from "./HoverMenu";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import useWindowDimensions from "../hooks/useWindowsDimension";
import { ScreenSize } from "../models/screenSize.enum";
import { IconTypes } from "../models/icons.enum";

const hoverMenuItems: MenuItem[] = [
	{ label: "Profile", link: "" },
	{ label: "Contact", link: "" },
	{ label: "Logout", link: "" },
];

type NabBarProps = {
	menuItems: NavBarItem[];
};

const NavBar: React.FC<NabBarProps> = ({ menuItems }) => {
	const screenSize = useWindowDimensions();
	return (
		<div className='navBar'>
			<div
				className={
					screenSize === ScreenSize.SM
						? "navBar-logo-and-items-mobile"
						: "navBar-logo-and-items"
				}
			>
				{screenSize === ScreenSize.SM ? (
					<HoverMenu
						menuItem={menuItems}
						icon={IconTypes.MENU}
						openLeft={false}
					/>
				) : (
					<>
						<p>
							<Link to='/home'>
								<Logo />
							</Link>
						</p>
						<ul>
							{menuItems.map((item: NavBarItem) => (
								<li key={uuidv4()}>
									<Link to={item.link}>{item.label}</Link>
								</li>
							))}
						</ul>
					</>
				)}
			</div>
			<HoverMenu label={"User"} menuItem={hoverMenuItems} />
		</div>
	);
};

export default NavBar;
