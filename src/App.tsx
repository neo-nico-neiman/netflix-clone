import "./App.scss";
import HeroImage from "./components/HeroImage";
import NavBar from "./components/NavBar";
import { Home } from "./containers/Home";
import { NavBarItem } from "./models/navBar.model";

function App() {
	const menuItems: NavBarItem[] = [
		{ label: "Categories", url: "as" },
		{ label: "New Arrivals", url: "as" },
		{ label: "My Picks", url: "as" },
	];
	return (
		<>
			<NavBar menuItems={menuItems} />
			<Home></Home>
		</>
	);
}

export default App;
