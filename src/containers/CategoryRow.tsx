import React from "react";
import { Thumbnail, TitleLarge } from "../components";
import { Movie, MovieList } from "../models/movies.model";
import { v4 as uuidv4 } from 'uuid';

type CategoryRowProps = {
    moviesList: MovieList;
};

const CategoryRow: React.FC<CategoryRowProps> = ({ moviesList }) => {
    return (<div className={'category-wrapper'}>
        <TitleLarge class={'category-row-title'}>{moviesList.category}</TitleLarge>
        <div className={'category-row'}>
            {moviesList.list.map(
                (movie: Movie) => <Thumbnail key={uuidv4()}
                                             imageURL={movie.imageURL}
                                             alt={movie.altText}
                                             title={movie.title}/>
            )}
        </div>
    </div>);
};

export default CategoryRow;