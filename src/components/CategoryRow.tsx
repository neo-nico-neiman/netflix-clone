import React from "react";
import { Thumbnail, TitleLarge } from "../components";
import { Movie } from "../models/movies.model";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { toTitleCase } from "../utils/toTitleCase";

type CategoryRowProps = {
	moviesList: Movie[];
	category: string;
};

const CategoryRow: React.FC<CategoryRowProps> = ({ moviesList, category }) => {
	let shuffledList = moviesList
		?.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);

	return (
		<div className={"category-wrapper"}>
			<TitleLarge class={"category-row-title"}>
				{toTitleCase(category)}
			</TitleLarge>
			<div className={"category-row"}>
				{shuffledList.map((movie: Movie) => (
					<Link to={`/movies/${movie.id}`} key={uuidv4()}>
						<Thumbnail
							imageURL={movie.imageURL}
							alt={movie.altText}
							title={movie.title}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default CategoryRow;
