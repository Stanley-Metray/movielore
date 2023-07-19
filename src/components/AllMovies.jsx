import Movie from "./Movie";

const AllMovies = (props) => {
    window.scrollTo(0,0);
    return <>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 mt-5">
                {
                    props.movies.map((data, index) => {
                      return <Movie key={index} movie={data} getMovie={props.getMovie}/>
                    })
                }
        </div>
    </>
}

export default AllMovies;