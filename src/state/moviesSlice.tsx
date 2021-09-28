import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Categories } from "../models/categories.enum";
import { Movie } from "../models/movies.model";
import { titleGenerator } from "../utils/titleCreator";
import { RootState } from "./store";

const moviesList = [
	{
		imageURL: "./images/thumbnails/action/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpeg",
		altText: "Denise Jans",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 1,
		category: Categories.ACTION,
	},
	{
		imageURL: "./images/thumbnails/action/8Y43POKjjKDGI9MH89NW0NAzzp8.jpeg",
		altText: "Popcorn Factory",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 2,
		category: Categories.ACTION,
	},
	{
		imageURL: "./images/thumbnails/action/byflnwPMumyvrCW9SfO5Miq3647.jpeg",
		altText: "Once Upon A Movie",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 3,
		category: Categories.ACTION,
	},
	{
		imageURL: "./images/thumbnails/action/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpeg",
		altText: "Levitation",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 4,
		category: Categories.ACTION,
	},
	{
		imageURL: "./images/thumbnails/action/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpeg",
		altText: "Regal Solarium",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 5,
		category: Categories.ACTION,
	},
	{
		imageURL: "./images/thumbnails/action/MDYanFolbT76dj0gsCbhS2GM5A.jpeg",
		altText: "Regal Solarium",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 6,
		category: Categories.ACTION,
	},
	{
		imageURL: "./images/thumbnails/action/uizrxdqIl1a4c9UIhSdPM3o6u0f.jpeg",
		altText: "Regal Solarium",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 7,
		category: Categories.ACTION,
	},
	{
		imageURL: "./images/thumbnails/action/vD8oPUpDUZDTGI5IVofxrUjxxUO.jpeg",
		altText: "Regal Solarium",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 8,
		category: Categories.ACTION,
	},
	{
		imageURL: "./images/thumbnails/comedy/8s4h9friP6Ci3adRGahHARVd76E.jpeg",
		altText: "Denise Jans",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 9,
		category: Categories.COMEDY,
	},
	{
		imageURL: "./images/thumbnails/action/MDYanFolbT76dj0gsCbhS2GM5A.jpeg",
		altText: "Regal Solarium",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 10,
		category: Categories.COMEDY,
	},
	{
		imageURL: "./images/thumbnails/comedy/8Y43POKjjKDGI9MH89NW0NAzzp8.jpeg",
		altText: "Popcorn Factory",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 11,
		category: Categories.COMEDY,
	},
	{
		imageURL: "./images/thumbnails/comedy/mtRW6eAwOO27h3zrfU2foQFW7Hg.jpeg",
		altText: "Once Upon A Movie",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 12,
		category: Categories.COMEDY,
	},
	{
		imageURL: "./images/thumbnails/comedy/620hnMVLu6RSZW6a5rwO8gqpt0t.jpeg",
		altText: "Levitation",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 13,
		category: Categories.COMEDY,
	},
	{
		imageURL: "./images/thumbnails/comedy/akwg1s7hV5ljeSYFfkw7hTHjVqk.jpeg",
		altText: "Regal Solarium",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 14,
		category: Categories.COMEDY,
	},
	{
		imageURL: "./images/thumbnails/action/vD8oPUpDUZDTGI5IVofxrUjxxUO.jpeg",
		altText: "Regal Solarium",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 15,
		category: Categories.COMEDY,
	},
	{
		imageURL: "./images/thumbnails/action/uizrxdqIl1a4c9UIhSdPM3o6u0f.jpeg",
		altText: "Regal Solarium",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 16,
		category: Categories.COMEDY,
	},
	{
		imageURL: "./images/thumbnails/comedy/8s4h9friP6Ci3adRGahHARVd76E.jpeg",
		altText: "Denise Jans",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 17,
		category: Categories.HORROR,
	},
	{
		imageURL: "./images/thumbnails/action/MDYanFolbT76dj0gsCbhS2GM5A.jpeg",
		altText: "Regal Solarium",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 18,
		category: Categories.HORROR,
	},
	{
		imageURL: "./images/thumbnails/comedy/8Y43POKjjKDGI9MH89NW0NAzzp8.jpeg",
		altText: "Popcorn Factory",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 19,
		category: Categories.HORROR,
	},
	{
		imageURL: "./images/thumbnails/comedy/mtRW6eAwOO27h3zrfU2foQFW7Hg.jpeg",
		altText: "Once Upon A Movie",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 20,
		category: Categories.HORROR,
	},
	{
		imageURL: "./images/thumbnails/comedy/620hnMVLu6RSZW6a5rwO8gqpt0t.jpeg",
		altText: "Levitation",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 21,
		category: Categories.HORROR,
	},
	{
		imageURL: "./images/thumbnails/comedy/akwg1s7hV5ljeSYFfkw7hTHjVqk.jpeg",
		altText: "Regal Solarium",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 22,
		category: Categories.HORROR,
	},
	{
		imageURL: "./images/thumbnails/action/vD8oPUpDUZDTGI5IVofxrUjxxUO.jpeg",
		altText: "Regal Solarium",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 23,
		category: Categories.HORROR,
	},
	{
		imageURL: "./images/thumbnails/action/uizrxdqIl1a4c9UIhSdPM3o6u0f.jpeg",
		altText: "Regal Solarium",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 24,
		category: Categories.HORROR,
	},
	{
		imageURL: "./images/thumbnails/comedy/8s4h9friP6Ci3adRGahHARVd76E.jpeg",
		altText: "Denise Jans",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 25,
		category: Categories.ROMANCE,
	},
	{
		imageURL: "./images/thumbnails/action/MDYanFolbT76dj0gsCbhS2GM5A.jpeg",
		altText: "Regal Solarium",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 26,
		category: Categories.ROMANCE,
	},
	{
		imageURL: "./images/thumbnails/comedy/8Y43POKjjKDGI9MH89NW0NAzzp8.jpeg",
		altText: "Popcorn Factory",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 27,
		category: Categories.ROMANCE,
	},
	{
		imageURL: "./images/thumbnails/comedy/mtRW6eAwOO27h3zrfU2foQFW7Hg.jpeg",
		altText: "Once Upon A Movie",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 28,
		category: Categories.ROMANCE,
	},
	{
		imageURL: "./images/thumbnails/comedy/620hnMVLu6RSZW6a5rwO8gqpt0t.jpeg",
		altText: "Levitation",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 29,
		category: Categories.ROMANCE,
	},
	{
		imageURL: "./images/thumbnails/comedy/akwg1s7hV5ljeSYFfkw7hTHjVqk.jpeg",
		altText: "Regal Solarium",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 30,
		category: Categories.ROMANCE,
	},
	{
		imageURL: "./images/thumbnails/action/vD8oPUpDUZDTGI5IVofxrUjxxUO.jpeg",
		altText: "Regal Solarium",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 31,
		category: Categories.ROMANCE,
	},
	{
		imageURL: "./images/thumbnails/action/uizrxdqIl1a4c9UIhSdPM3o6u0f.jpeg",
		altText: "Regal Solarium",
		title: titleGenerator(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 32,
		category: Categories.ROMANCE,
	},
];

// Define a type for the slice state
interface MoviesState {
	moviesList: Movie[];
	myList: Movie[];
}

// Define the initial state using that type
const initialState: MoviesState = {
	moviesList: moviesList,
	myList: [],
};

const moviesSlice = createSlice({
	name: "movies",
	initialState: initialState,
	reducers: {
		add: (state, action: PayloadAction<Movie[]>) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.myList = { ...state.myList };
		},
		remove: (state) => {
			state.myList = { ...state.myList };
		},
		reset: (state, action) => {
			state.myList = [];
		},
	},
});

// Action creators are generated for each case reducer function
export const { add, remove, reset } = moviesSlice.actions;

const selectMoviesList = (state: RootState) => state.movies.moviesList;

const selectCategoryAction = (state: RootState) =>
	state.movies.moviesList.filter(
		(movie: Movie) => movie.category === Categories.ACTION
	);

const selectCategoryHorror = (state: RootState) =>
	state.movies.moviesList.filter(
		(movie: Movie) => movie.category === Categories.HORROR
	);

const selectCategoryComedy = (state: RootState) =>
	state.movies.moviesList.filter(
		(movie: Movie) => movie.category === Categories.COMEDY
	);

const selectCategoryRomance = (state: RootState) =>
	state.movies.moviesList.filter(
		(movie: Movie) => movie.category === Categories.ROMANCE
	);

const selectCurrentMovie = (state: RootState, id: number) =>
	state.movies.moviesList.filter((movie: Movie) => movie.id === id)[0];

export default moviesSlice.reducer;

export {
	moviesSlice,
	selectMoviesList,
	selectCategoryAction,
	selectCategoryHorror,
	selectCategoryComedy,
	selectCategoryRomance,
	selectCurrentMovie,
};
