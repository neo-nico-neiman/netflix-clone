import { Movie } from "../models/movies.model";
import { Observable, from, filter } from "rxjs";

import { Categories } from "../models/categories.enum";
import { titleGenerator } from "../utils/titleCreator";

const list = [
	{
		imageURL: "./images/thumbnails/action/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpeg",
		altText: "Denise Jans",
		title: "Denise Jans",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 1,
		category: Categories.ACTION,
	},
	{
		imageURL: "./images/thumbnails/action/8Y43POKjjKDGI9MH89NW0NAzzp8.jpeg",
		altText: "Popcorn Factory",
		title: "Popcorn Factory",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 2,
		category: Categories.ACTION,
	},
	{
		imageURL: "./images/thumbnails/action/byflnwPMumyvrCW9SfO5Miq3647.jpeg",
		altText: "Once Upon A Movie",
		title: "Once Upon A Movie",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 3,
		category: Categories.ACTION,
	},
	{
		imageURL: "./images/thumbnails/action/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpeg",
		altText: "Levitation",
		title: "Levitation",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 4,
		category: Categories.ACTION,
	},
	{
		imageURL: "./images/thumbnails/action/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpeg",
		altText: "Regal Solarium",
		title: "Regal Solarium",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 5,
		category: Categories.ACTION,
	},
	{
		imageURL: "./images/thumbnails/action/MDYanFolbT76dj0gsCbhS2GM5A.jpeg",
		altText: "Regal Solarium",
		title: "Regal Solarium",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 6,
		category: Categories.ACTION,
	},
	{
		imageURL: "./images/thumbnails/action/uizrxdqIl1a4c9UIhSdPM3o6u0f.jpeg",
		altText: "Regal Solarium",
		title: "Regal Solarium",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "",
		id: 7,
		category: Categories.ACTION,
	},
	{
		imageURL: "./images/thumbnails/action/vD8oPUpDUZDTGI5IVofxrUjxxUO.jpeg",
		altText: "Regal Solarium",
		title: "Regal Solarium",
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

const moviesList$: Observable<Movie> = from([...list]);

const moviesListAction$: Observable<Movie> = moviesList$.pipe(
	filter((movie: Movie) => movie.category === Categories.ACTION)
);

const getSelectedMovie = (id: number) =>
	moviesList$.pipe(filter((movie: Movie) => movie.id === id));

export { moviesList$, moviesListAction$, getSelectedMovie };
