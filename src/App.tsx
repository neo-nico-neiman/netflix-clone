import "./App.scss";
import NavBar from "./components/NavBar";
import { Home } from "./containers/Home";
import { NavBarItem } from "./models/navBar.model";
import { Route } from "react-router-dom";
import { NewArrivals } from "./containers/NewArrivals";
import { MyPicks } from "./containers/MyPicks";
import { Categories } from "./containers/Categories";
import { CommingSoon } from "./components/CommingSoon";

function App() {
	const menuItems: NavBarItem[] = [
		{ label: "Categories", url: "/categories" },
		{ label: "New Arrivals", url: "/new-arrivals" },
		{ label: "My Picks", url: "/my-picks" },
	];
	return (
		<>
			<NavBar menuItems={menuItems} />
			<Route path='/home' render={() => <Home></Home>}></Route>
			<Route
				path='/categories'
				render={() => <CommingSoon></CommingSoon>}
			></Route>
			<Route
				path='/new-arrivals'
				render={() => <CommingSoon></CommingSoon>}
			></Route>
			<Route
				path='/my-picks'
				render={() => <CommingSoon></CommingSoon>}
			></Route>
			<Route path='/' exact render={() => <Home></Home>}></Route>
		</>
	);
}

export default App;
