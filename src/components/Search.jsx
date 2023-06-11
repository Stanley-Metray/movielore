import AllMovies from "./AllMovies";
import { useEffect, useState } from "react";

const Search = (props) => {

    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});
    const queryParameters = new URLSearchParams(window.location.search);
    const searchTitle = queryParameters.get("title");
    
    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjIyZDlmODhiNTY0ZjVjMjg3Yzk2MjM4NmRhYjVjOCIsInN1YiI6IjY0NzhhNWM1MDc2Y2U4MDEyOGZiY2Y4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.21dZupEWbcoQf3g2tADxfGFNUdod1DUdBatevQLvd20'
        }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTitle}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => {
            setMovies(response.results);
            props.getCategory("Search results for : "+searchTitle);
        })
        .catch(err => console.error(err));

    return <>
        <AllMovies movies={movies} getMovie={props.getMovie} />
    </>
}

export default Search;