import { Link } from "react-router-dom";

const Movie = (props) => {
    return <>
        <div className="col">
            <Link to="/overview" className="overview" onClick={()=>{props.getMovie(props.movie)}} data-bs-movie={props.movie}>
                <div className="card">
                    <img src={"https://image.tmdb.org/t/p/original/"+props.movie.backdrop_path} className="card-img-top" alt="Poster Not Available" />
                    <div className="card-body">
                        <p className="card-title">{props.movie.original_title}</p>
                        <p className="card-date">{props.movie.release_date}</p>
                    </div>
                </div>
            </Link>
        </div>
    </>
}

export default Movie;