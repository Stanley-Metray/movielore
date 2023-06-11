import { useEffect } from "react";

const MovieOverview = (props)=>{
    
    useEffect(()=>{
        props.getCategory(props.movie.original_title);
    },[]);

    return <>
        <div className="movie-overview" style={{backgroundImage:`url(${props.thumb})`}}>
            <div className="movie-thumb">
                <img src={"https://image.tmdb.org/t/p/original/"+props.movie.backdrop_path} alt="..." />
            </div>
            <div className="movie-details">
                <div className="movie-title">
                    <h4>{props.movie.original_title}</h4>
                    <span>{props.movie.release_date}</span>
                </div>
                <p className="overview">{props.movie.overview}</p>
            </div>
        </div>
    </>
}

export default MovieOverview;