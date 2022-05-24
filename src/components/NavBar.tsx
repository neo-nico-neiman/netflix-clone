import { MenuItem, NavBarItem } from "../models/navBar.model";
import { v4 as uuidv4 } from "uuid";
import HoverMenu from "./HoverMenu";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import useWindowDimensions from "../hooks/useWindowsDimension";
import { ScreenSize } from "../models/screenSize.enum";
import { IconTypes } from "../models/icons.enum";

const hoverMenuItems: MenuItem[] = [
	{ label: "Profile", link: "/profile" },
	{ label: "Contact", link: "/contact" },
	{ label: "Logout", link: "/logout" },
];

type NabBarProps = {
	menuItems: NavBarItem[];
};

const NavBar = ({ menuItems }: NabBarProps) => {
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
					<div className='navBar-mobile-menu-logo'>
						<HoverMenu
							menuItem={menuItems}
							icon={IconTypes.MENU}
							openLeft={false}
						/>
						<span className='navbar-logo'>
							<Link to='/home'>
								<Logo />
							</Link>
						</span>
					</div>
				) : (
					<>
						<Link to='/home' className='navbar-logo'>
							<Logo />
						</Link>
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
			<HoverMenu
				label={"User"}
				menuItem={hoverMenuItems}
				icon={IconTypes.USER}
			/>
		</div>
	);
};

export default NavBar;
