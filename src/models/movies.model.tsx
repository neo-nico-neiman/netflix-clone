import { Categories } from "./categories.enum";

export interface Movie {
	id: number;
	imageURL: string;
	altText: string;
	title: string;
	description: string;
	link: string;
	category: string;
}

export interface MovieList {
	list: Movie[];
	category: Categories;
}
