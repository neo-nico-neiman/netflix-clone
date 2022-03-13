import React, {useState} from 'react';
import ReactPlayer from 'react-player/lazy'

// {
//     "imDbId": "tt0111161",
//     "title": "The Shawshank Redemption",
//     "fullTitle": "The Shawshank Redemption (1994)",
//     "type": "Movie",
//     "year": "1994",
//     "videoId": "vi3877612057",
//     "videoTitle": "Official Trailer",
//     "videoDescription": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.\r\n",
//     "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_.jpg",
//     "uploadDate": null,
//     "link": "https://www.imdb.com/video/vi3877612057",
//     "linkEmbed": "https://www.imdb.com/video/imdb/vi3877612057/imdb/embed",
//     "errorMessage": ""
// }
interface MovieTrailerProps {
    id: string;
}

export default function MovieTrailer({id}: MovieTrailerProps) {
    const [trailer, setTrailer] = useState<{ link: string } | undefined>(undefined);

    async function getTrailer(id: string) {
        const res = await fetch(`${process.env.REACT_APP_IMDB_URL}Trailer/${process.env.REACT_APP_IMDB_KEY_2}/${id}`);
        const data = await res.json();
        return data
    }

    getTrailer(id).then(t => setTrailer(t))

    return (
        <div><ReactPlayer url={trailer?.link}/></div>
    );
}
