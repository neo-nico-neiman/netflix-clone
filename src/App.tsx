import "./App.scss";
import NavBar from "./components/NavBar";
import { Home } from "./containers/Home";
import { NavBarItem } from "./models/navBar.model";
import { Route } from "react-router-dom";
import { ComingSoon } from "./components/ComingSoon";
import { MoviePage } from "./containers/MoviePage";

function App() {
	const menuItems: NavBarItem[] = [
		{ label: "Home", link: "/home" },
		{ label: "Categories", link: "/categories" },
		{ label: "TV Shows", link: "/tv-shows" },
		{ label: "Movies", link: "/movies-menu" },
		{ label: "My Picks", link: "/my-picks" },
	];

	const root='netflix-clone'
	return (
		<>
			<NavBar menuItems={menuItems} />
			<Route path={`${root}/home`} component={Home}></Route>
			<Route path={`${root}/profile`} component={ComingSoon}></Route>
			<Route path={`${root}/contact`} component={ComingSoon}></Route>
			<Route path={`${root}/logout`} component={ComingSoon}></Route>
			<Route path={`${root}/categories`} component={ComingSoon}></Route>
			<Route path={`${root}/movies-menu`} component={ComingSoon}></Route>
			<Route path={`${root}/tv-shows`} component={ComingSoon}></Route>
			<Route path={`${root}/my-picks`} component={ComingSoon}></Route>
			<Route path={`${root}/movies/:id`} component={MoviePage}></Route>
			<Route path={`${root}/`} exact component={Home}></Route>
		</>
	);
}

export default App;
