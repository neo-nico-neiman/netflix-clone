import React from "react";

function TitleXLarge(props: any) {
	return <h1 className={props.class}>{props.children}</h1>;
}

function TitleLarge(props: any) {
	return <h2 className={props.class}>{props.children}</h2>;
}

function TitleMedium(props: any) {
	return <h3 className={props.class}>{props.children}</h3>;
}

function TitleSmall(props: any) {
	return <h5 className={props.class}>{props.children}</h5>;
}

function TextContent(props: any) {
	return <p className={props.class}>{props.children}</p>;
}

export { TitleXLarge, TitleLarge, TitleMedium, TitleSmall, TextContent };
