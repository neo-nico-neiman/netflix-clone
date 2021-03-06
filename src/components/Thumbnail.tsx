import React from "react";
import { TitleMedium } from ".";
import ellipsis from "../utils/ellipsis";

type ThumbnailProps = {
	imageURL: string;
	alt: string;
	title: string;
};

const Thumbnail: React.FC<ThumbnailProps> = ({ imageURL, alt, title }) => {
	return (
		<div className={"thumbnail"}>
			<img src={imageURL} alt={alt} className={"thumbnail-image"} />
			<TitleMedium class={"thumbnail-title"}>{ellipsis(title)}</TitleMedium>
		</div>
	);
};

export { Thumbnail };
