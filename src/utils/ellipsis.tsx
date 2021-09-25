export default function ellipsis(text: string, maxLength: number = 12): string {
	let textWithEllipsis: string = "";

	const charArray = text.split("");

	textWithEllipsis =
		charArray.length > maxLength
			? charArray.splice(0, maxLength).join("") + "..."
			: text;
	return textWithEllipsis;
}
