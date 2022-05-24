import { useEffect, useState } from "react";
import useTop250, { Top250Data } from "../api/queries/useTop250";
// import {IMDBMovie} from "../models/movies.model";
import MovieTrailer from "./MovieTrailer";

export default function Top250() {
	const res = useTop250();
	const [data, setData] = useState<Top250Data | undefined>(undefined);

	useEffect(() => {
		setData(res.data);
	}, [setData, res]);

	// return <div>{data?.items.map((movie: IMDBMovie) => <div key={movie.id}>{JSON.stringify(movie)}</div>)}</div>;
	return !data ? (
		<div>...Loading</div>
	) : (
		<div>
			<MovieTrailer id={data?.items[0].id} />
		</div>
	);
}
