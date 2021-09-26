import "./App.scss";
import NavBar from "./components/NavBar";
import { Home } from "./containers/Home";
import { NavBarItem } from "./models/navBar.model";
import { Route } from "react-router-dom";
import { CommingSoon } from "./components/CommingSoon";
import { Movie } from "./containers/Movie";

function App() {
	const menuItems: NavBarItem[] = [
		{ label: "Categories", url: "/categories" },
		{ label: "New Arrivals", url: "/new-arrivals" },
		{ label: "My Picks", url: "/my-picks" },
	];
	return (
		<>
			<NavBar menuItems={menuItems} />
			<Route path='/home' component={Home}></Route>
			<Route path='/categories' component={CommingSoon}></Route>
			<Route path='/new-arrivals' component={CommingSoon}></Route>
			<Route path='/my-picks' component={CommingSoon}></Route>
			<Route path='/movies/:id' component={Movie}></Route>
			<Route path='/' exact component={Home}></Route>
		</>
	);
}

export default App;
