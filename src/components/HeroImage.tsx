import React from "react";
import { TextContent, TitleXLarge } from ".";
import { Movie } from "../models/movies.model";
import { ButtonSecondary } from "./Buttons";

type HeroImageProps = {
	movie: Movie;
};

const HeroImage: React.FC<HeroImageProps> = ({ movie }) => {
	const onPlay = () => null;
	const onMyList = () => null;

	return (
		<div
			className='hero-wrapper'
			style={{ backgroundImage: `url(${movie.imageURL}` }}
		>
			<div className='hero-text'>
				<TitleXLarge class={"hero-text-title"}>{movie.title}</TitleXLarge>
				<div className='hero-text-buttons'>
					<ButtonSecondary
						label={"Play"}
						onClick={onPlay}
						className=''
					></ButtonSecondary>

					<ButtonSecondary
						label={"My List"}
						onClick={onMyList}
						className='margin-left-sm'
					></ButtonSecondary>
				</div>
				<TextContent class={"hero-text-description"}>
					{movie.description}
				</TextContent>
			</div>
			<div className={"hero-footer"}></div>
		</div>
	);
};

export default HeroImage;
