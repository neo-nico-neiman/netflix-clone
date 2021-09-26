import React from "react";
import { getSelectedMovie } from "../state/movies.facade";
import { Movie } from "../models/movies.model";
import { useParams } from "react-router-dom";
import HeroImage from "../components/HeroImage";
import { TitleXLarge, TextContent } from "../components";
import { ButtonSecondary } from "../components/Buttons";
import nameGenerator from "../utils/nameGenerator";

const MoviePage = () => {
	const { id } = useParams<{ id: string }>();
	const movie$ = getSelectedMovie(+id);
	let selectedMovie: Movie = {
		id: 0,
		imageURL: "",
		altText: "",
		title: "",
		description: "",
		link: "",
		category: "",
	};

	movie$.subscribe((movie) => (selectedMovie = movie));
	console.log(selectedMovie.imageURL);
	return (
		<div
			className='movie-page-wrapper'
			style={{ backgroundImage: `url(../${selectedMovie.imageURL}` }}
		>
			<div className='movie-page-text'>
				<TitleXLarge class={"movie-page-text-title"}>
					{selectedMovie.title.toUpperCase()}
				</TitleXLarge>
				<div className='movie-page-text-movie-specs'>
					<TextContent class={"movie-page-text-movie-specs-status"}>
						New
					</TextContent>
					<TextContent>2021</TextContent>
					<TextContent class={"movie-page-text-movie-specs-rated"}>
						TV-MA
					</TextContent>
					<TextContent>Limited Series</TextContent>
					<TextContent class={"movie-page-text-movie-specs-rated"}>
						4K HDR
					</TextContent>
				</div>
				{/* <div className='hero-text-buttons'>
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
				</div> */}
				<TextContent class={"movie-page-text-description"}>
					{selectedMovie.description}
				</TextContent>

				<div className='movie-page-crew'>
					<TextContent>Cast: {nameGenerator(3)}</TextContent>
					<TextContent>Director: {nameGenerator()} </TextContent>
					<TextContent>Creator: {nameGenerator()}</TextContent>
				</div>
			</div>
		</div>
	);
};

export { MoviePage };
