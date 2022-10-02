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
	return (
		<>
			<NavBar menuItems={menuItems} />
			<Route path='/netflix-clone' component={Home}></Route>
			<Route path='/profile' component={ComingSoon}></Route>
			<Route path='/contact' component={ComingSoon}></Route>
			<Route path='/logout' component={ComingSoon}></Route>
			<Route path='/categories' component={ComingSoon}></Route>
			<Route path='/movies-menu' component={ComingSoon}></Route>
			<Route path='/tv-shows' component={ComingSoon}></Route>
			<Route path='/my-picks' component={ComingSoon}></Route>
			<Route path='/movies/:id' component={MoviePage}></Route>
			<Route path='/' exact component={Home}></Route>
		</>
	);
}

export default App;
