import React from "react";
import { Thumbnail, TitleLarge } from "../components";
import { Movie, MovieList } from "../models/movies.model";

type CategoryRowProps = {
    moviesList: MovieList;
};

const CategoryRow: React.FC<CategoryRowProps> = ({ moviesList }) => {
    return (<div className={'category-wrapper'}>
        <TitleLarge class={'category-row-title'}>{moviesList.category}</TitleLarge>
        <div className={'category-row'}>
            {moviesList.list.map(
                (movie: Movie) => <Thumbnail imageURL={movie.imageURL}
                                             alt={movie.altText}
                                             title={movie.title}/>
            )}
        </div>
    </div>);
};

export default CategoryRow;