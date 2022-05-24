type TitleProps = {
	class?: string;
	children: React.ReactNode;
};

function TitleXLarge(props: TitleProps) {
	return <h1 className={props.class}>{props.children}</h1>;
}

function TitleLarge(props: TitleProps) {
	return <h2 className={props.class}>{props.children}</h2>;
}

function TitleMedium(props: TitleProps) {
	return <h3 className={props.class}>{props.children}</h3>;
}

function TitleSmall(props: TitleProps) {
	return <h5 className={props.class}>{props.children}</h5>;
}

function TextContent(props: TitleProps) {
	return <p className={props.class}>{props.children}</p>;
}

export { TitleXLarge, TitleLarge, TitleMedium, TitleSmall, TextContent };
