import React from "react";
import { getSelectedMovie } from "../state/movies.facade";
import { Movie } from "../models/movies.model";
import { useParams } from "react-router-dom";
import { TitleXLarge, TextContent } from "../components";
import { ButtonHollowBorder } from "../components/Buttons";
import nameGenerator from "../utils/nameGenerator";
import useWindowDimensions from "../hooks/useWindowsDimension";

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

	const onClick = () => null;

	const screenSize = useWindowDimensions();
	return (
		<div
			className='movie-page-wrapper'
			style={{ backgroundImage: `url(../${selectedMovie.imageURL}` }}
		>
			<div className='movie-page-text'>
				<div className='movie-page-text-container'>
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

					<TextContent class={"movie-page-text-description"}>
						{selectedMovie.description}
					</TextContent>

					<div className='movie-page-crew'>
						<TextContent>Cast: {nameGenerator(3)}</TextContent>
						<TextContent>Director: {nameGenerator()} </TextContent>
						<TextContent>Creator: {nameGenerator()}</TextContent>
					</div>
					<div
						className={
							screenSize === "sm" ? "movie-page-CTA-mobile" : "movie-page-CTA"
						}
					>
						<ButtonHollowBorder
							label='Rate This Title'
							icon='thumbs'
							onClick={onClick()}
							className=''
						></ButtonHollowBorder>
						<ButtonHollowBorder
							label='Play'
							icon='play'
							onClick={onClick()}
							className=''
						></ButtonHollowBorder>
						<ButtonHollowBorder
							label='More Like This'
							icon='grid'
							onClick={onClick()}
							className=''
						></ButtonHollowBorder>
						<ButtonHollowBorder
							label={"Audio & Subtitles"}
							icon='subtitles'
							onClick={onClick()}
							className=''
						></ButtonHollowBorder>
					</div>
				</div>
			</div>
		</div>
	);
};

export { MoviePage };
