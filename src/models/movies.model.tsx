import { Categories } from "./categories.enum";

export interface Movie {
    imageURL: string;
    altText: string;
    title: string;
    description: string;
    link: string;
}

export interface MovieList {
    list: Movie[];
    category: Categories
}