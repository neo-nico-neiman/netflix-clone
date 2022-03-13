import {Categories} from './categories.enum';

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

export interface IMDBMovie {
    id: string;
    rank: string;
    title: string;
    fullTitle: string;
    year: string;
    image: string;
    crew: string;
    imDbRating: string;
    imDbRatingCount: string;
}