import React from "react";
import { TextContent, TitleXLarge } from ".";
import { Movie } from "../models/movies.model";

type HeroImageProps = {
	movie: Movie;
};

const HeroImage: React.FC<HeroImageProps> = ({ movie }) => {
	return (
		<div>
			<div className='hero-text'>
				<TitleXLarge class={"hero-text-title"}>{movie.title}</TitleXLarge>
				<TextContent>{movie.description}</TextContent>
			</div>

			<img className={"hero-image"} src={movie.imageURL} alt={movie.title} />
		</div>
	);
};

export default HeroImage;
