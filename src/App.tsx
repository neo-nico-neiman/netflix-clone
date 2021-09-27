import "./App.scss";
import NavBar from "./components/NavBar";
import { Home } from "./containers/Home";
import { NavBarItem } from "./models/navBar.model";
import { Route } from "react-router-dom";
import { CommingSoon } from "./components/CommingSoon";
import { MoviePage } from "./containers/MoviePage";

function App() {
	const menuItems: NavBarItem[] = [
		{ label: "Home", link: "/home" },
		{ label: "Categories", link: "/categories" },
		{ label: "TV Shows", link: "/tv-shows" },
		{ label: "Movies", link: "/movies" },
		{ label: "My Picks", link: "/my-picks" },
	];
	return (
		<>
			<NavBar menuItems={menuItems} />
			<Route path='/home' component={Home}></Route>
			<Route path='/categories' component={CommingSoon}></Route>
			<Route path='/movies' component={CommingSoon}></Route>
			<Route path='/tv-shows' component={CommingSoon}></Route>
			<Route path='/my-picks' component={CommingSoon}></Route>
			<Route path='/movies/:id' component={MoviePage}></Route>
			<Route path='/' exact component={Home}></Route>
		</>
	);
}

export default App;
