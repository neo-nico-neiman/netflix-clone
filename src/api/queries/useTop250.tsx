import React from 'react';
import {useQuery} from "react-query";
import {JSONResponse} from "../JSONResponse";
import {IMDBMovie} from "../../models/movies.model";

async function fetchTop250() {
    const res = await fetch(`${process.env.REACT_APP_IMDB_URL}Top250Movies/${process.env.REACT_APP_IMDB_KEY_2}`);

    if (res.status !== 200) {
        throw new Error('Unknown API error');
    }
    const data = await res.json()
    return data;
}

export interface Top250Data {
    errorMessage: string;
    items: IMDBMovie[];
}

interface Top250Response extends JSONResponse {
    data?: Top250Data;
}

export default function useTop250() {
    return useQuery<Top250Data | undefined, Error>(['top250'], () => fetchTop250())
};

