import { TextContent, TitleXLarge } from ".";
import useWindowDimensions from "../hooks/useWindowsDimension";
import { Movie } from "../models/movies.model";
import { ScreenSize } from "../models/screenSize.enum";
import { ButtonSecondary } from "./Buttons";

type HeroImageProps = {
	movie: Movie;
};

const HeroImage = ({ movie }: HeroImageProps) => {
	const onPlay = () => null;
	const onMyList = () => null;

	const screenSize = useWindowDimensions();

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
				<TextContent
					class={
						screenSize === ScreenSize.SM
							? "hero-text-description-mobile"
							: "hero-text-description"
					}
				>
					{movie.description}
				</TextContent>
			</div>
			<div className={"hero-footer"}></div>
		</div>
	);
};

export default HeroImage;
