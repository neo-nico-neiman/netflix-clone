import React from "react";
import { useParams } from "react-router-dom";
import { TitleXLarge, TextContent } from "../components";
import { ButtonHollowBorder } from "../components/Buttons";
import nameGenerator from "../utils/nameGenerator";
import useWindowDimensions from "../hooks/useWindowsDimension";
import { ScreenSize } from "../models/screenSize.enum";
import store from "../state/store";
import { selectCurrentMovie } from "../state/moviesSlice";
import { IconTypes } from "../models/icons.enum";

const MoviePage = () => {
	const { id } = useParams<{ id: string }>();
	const selectedMovie = selectCurrentMovie(store.getState(), +id);

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
							screenSize === ScreenSize.SM
								? "movie-page-CTA-mobile"
								: "movie-page-CTA"
						}
					>
						<ButtonHollowBorder
							label='Rate This Title'
							icon={IconTypes.THUMBS}
							onClick={onClick()}
							className=''
						></ButtonHollowBorder>
						<ButtonHollowBorder
							label='Play'
							icon={IconTypes.PLAY}
							onClick={onClick()}
							className=''
						></ButtonHollowBorder>
						<ButtonHollowBorder
							label='More Like This'
							icon={IconTypes.GRID}
							onClick={onClick()}
							className=''
						></ButtonHollowBorder>
						<ButtonHollowBorder
							label={"Audio & Subtitles"}
							icon={IconTypes.SUBTITLES}
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
