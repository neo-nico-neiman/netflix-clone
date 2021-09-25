import "./App.scss";
import HeroImage from "./components/HeroImage";
import NavBar from "./components/NavBar";
import CategoryRow from "./containers/CategoryRow";
import { Categories } from "./models/categories.enum";
import { MovieList } from "./models/movies.model";
import { NavBarItem } from "./models/navBar.model";
import { titleGenerator } from "./utils/titleCreator";

function App() {
	const moviesListAction: MovieList = {
		category: Categories.ACTION,
		list: [
			{
				imageURL: "./images/thumbnails/action/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpeg",
				altText: "Denise Jans",
				title: "Denise Jans",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/action/8Y43POKjjKDGI9MH89NW0NAzzp8.jpeg",
				altText: "Popcorn Factory",
				title: "Popcorn Factory",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/action/byflnwPMumyvrCW9SfO5Miq3647.jpeg",
				altText: "Once Upon A Movie",
				title: "Once Upon A Movie",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/action/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpeg",
				altText: "Levitation",
				title: "Levitation",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/action/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpeg",
				altText: "Regal Solarium",
				title: "Regal Solarium",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/action/MDYanFolbT76dj0gsCbhS2GM5A.jpeg",
				altText: "Regal Solarium",
				title: "Regal Solarium",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/action/uizrxdqIl1a4c9UIhSdPM3o6u0f.jpeg",
				altText: "Regal Solarium",
				title: "Regal Solarium",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/action/vD8oPUpDUZDTGI5IVofxrUjxxUO.jpeg",
				altText: "Regal Solarium",
				title: "Regal Solarium",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
		],
	};

	const moviesListComedy: MovieList = {
		category: Categories.COMEDY,
		list: [
			{
				imageURL: "./images/thumbnails/comedy/8s4h9friP6Ci3adRGahHARVd76E.jpeg",
				altText: "Denise Jans",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/action/MDYanFolbT76dj0gsCbhS2GM5A.jpeg",
				altText: "Regal Solarium",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/comedy/8Y43POKjjKDGI9MH89NW0NAzzp8.jpeg",
				altText: "Popcorn Factory",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/comedy/mtRW6eAwOO27h3zrfU2foQFW7Hg.jpeg",
				altText: "Once Upon A Movie",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/comedy/620hnMVLu6RSZW6a5rwO8gqpt0t.jpeg",
				altText: "Levitation",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/comedy/akwg1s7hV5ljeSYFfkw7hTHjVqk.jpeg",
				altText: "Regal Solarium",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/action/vD8oPUpDUZDTGI5IVofxrUjxxUO.jpeg",
				altText: "Regal Solarium",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/action/uizrxdqIl1a4c9UIhSdPM3o6u0f.jpeg",
				altText: "Regal Solarium",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
		],
	};

	const moviesListHorror: MovieList = {
		category: Categories.HORROR,
		list: [
			{
				imageURL: "./images/thumbnails/comedy/8s4h9friP6Ci3adRGahHARVd76E.jpeg",
				altText: "Denise Jans",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/action/MDYanFolbT76dj0gsCbhS2GM5A.jpeg",
				altText: "Regal Solarium",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/comedy/8Y43POKjjKDGI9MH89NW0NAzzp8.jpeg",
				altText: "Popcorn Factory",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/comedy/mtRW6eAwOO27h3zrfU2foQFW7Hg.jpeg",
				altText: "Once Upon A Movie",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/comedy/620hnMVLu6RSZW6a5rwO8gqpt0t.jpeg",
				altText: "Levitation",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/comedy/akwg1s7hV5ljeSYFfkw7hTHjVqk.jpeg",
				altText: "Regal Solarium",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/action/vD8oPUpDUZDTGI5IVofxrUjxxUO.jpeg",
				altText: "Regal Solarium",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/action/uizrxdqIl1a4c9UIhSdPM3o6u0f.jpeg",
				altText: "Regal Solarium",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
		],
	};

	const moviesListRomance: MovieList = {
		category: Categories.ROMANCE,
		list: [
			{
				imageURL: "./images/thumbnails/comedy/8s4h9friP6Ci3adRGahHARVd76E.jpeg",
				altText: "Denise Jans",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/action/MDYanFolbT76dj0gsCbhS2GM5A.jpeg",
				altText: "Regal Solarium",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/comedy/8Y43POKjjKDGI9MH89NW0NAzzp8.jpeg",
				altText: "Popcorn Factory",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/comedy/mtRW6eAwOO27h3zrfU2foQFW7Hg.jpeg",
				altText: "Once Upon A Movie",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/comedy/620hnMVLu6RSZW6a5rwO8gqpt0t.jpeg",
				altText: "Levitation",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/comedy/akwg1s7hV5ljeSYFfkw7hTHjVqk.jpeg",
				altText: "Regal Solarium",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/action/vD8oPUpDUZDTGI5IVofxrUjxxUO.jpeg",
				altText: "Regal Solarium",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
			{
				imageURL: "./images/thumbnails/action/uizrxdqIl1a4c9UIhSdPM3o6u0f.jpeg",
				altText: "Regal Solarium",
				title: titleGenerator(),
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				link: "",
			},
		],
	};

	const menuItems: NavBarItem[] = [
		{ label: "Categories", url: "as" },
		{ label: "New Arrivals", url: "as" },
		{ label: "My Picks", url: "as" },
	];
	return (
		<>
			<NavBar menuItems={menuItems} />
			<HeroImage movie={moviesListAction.list[1]} />
			<div className='App'>
				<CategoryRow moviesList={moviesListAction} />
				<CategoryRow moviesList={moviesListComedy} />
				<CategoryRow moviesList={moviesListHorror} />
				<CategoryRow moviesList={moviesListRomance} />
			</div>
		</>
	);
}

export default App;
