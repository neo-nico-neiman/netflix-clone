import React from "react";
import { Thumbnail, TitleLarge, TitleMedium } from "../components";
import { Movie } from "../models/movies.model";

type CategoryRowProps = {
    moviesList: Movie[];
    category: string;
};

const CategoryRow: React.FC<CategoryRowProps> = ({ moviesList, category }) => {
    return (<div className={'category-wrapper'}>
        <TitleLarge class={'category-row-title'}>{category}</TitleLarge>
        <div className={'category-row'}>
            {moviesList.map(
                (movie: Movie) => <Thumbnail imageURL={movie.imageURL}
                                             alt={movie.altText}
                                             title={movie.title}
                                             />
            )}
        </div>
    </div>);
};

export default CategoryRow;