import { Link } from "react-router-dom";

const Menu = (props) => {
    const getCategory = (e) => {
        props.getCategory(e.target.getAttribute("data-bs-name"));
    }

    const getQuery = (e) => {
        setSearchTitle(e.target.value);
    }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     window.location.replace("/search?title="+searchTitle);
    // }

    return <>
        <nav className="navbar navbar-dark navbar-expand-lg p-0">
            <div className="container-fluid">
                <Link onClick={getCategory} className="navbar-brand ms-4" to="/" data-bs-name="home">MoviesLore</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-4 gap-2 me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link onClick={getCategory} className="nav-link active" aria-current="page" to="/popular" data-bs-name="popular">Popular</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={getCategory} className="nav-link" to="/now-playing" data-bs-name="now-playing">Now Playing</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={getCategory} className="nav-link" to="/top-rated" data-bs-name="top-rated">Top Rated</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={getCategory} className="nav-link" to="/upcoming" data-bs-name="upcoming">Upcoming</Link>
                        </li>
                    </ul>
                    <form autoComplete="off" className="me-4 search-box" role="search" method="get" onClick={()=>{alert("Oops! sorry we are working on this feature")}}>
                        <input type="text" name="searchQuery" placeholder="Search movie by name" aria-label="Search" onChange={getQuery} />
                        <button type="submit"><i className="bi bi-search"></i></button>
                    </form>
                </div>
            </div>
        </nav>
    </>
}

export default Menu;
