import { useEffect, useState } from "react";
import Menu from "./components/Menu";
import MovieOverview from "./components/MovieOverview";
import Search from "./components/Search";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMovies from "./components/AllMovies";
import "../src/App.css";
import "./components/assets/menu.css";
import "./components/assets/movie.css";
import "./components/assets/movieoverview.css";
import "./components/assets/footer.css";

function App() {

  const [category, setCategory] = useState("");
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjIyZDlmODhiNTY0ZjVjMjg3Yzk2MjM4NmRhYjVjOCIsInN1YiI6IjY0NzhhNWM1MDc2Y2U4MDEyOGZiY2Y4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.21dZupEWbcoQf3g2tADxfGFNUdod1DUdBatevQLvd20'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then((response) => {
        setMovies(response.results)
        setCategory("Popular");
      }).catch(err => console.error(err));
  }, []);

  const getCategory = (category) => {

    if (category === "popular") {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjIyZDlmODhiNTY0ZjVjMjg3Yzk2MjM4NmRhYjVjOCIsInN1YiI6IjY0NzhhNWM1MDc2Y2U4MDEyOGZiY2Y4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.21dZupEWbcoQf3g2tADxfGFNUdod1DUdBatevQLvd20'
        }
      };

      fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then((response) => {
          setMovies(response.results)
          setCategory("Popular");
        }).catch(err => console.error(err));
    }
    else if (category === "now-playing") {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjIyZDlmODhiNTY0ZjVjMjg3Yzk2MjM4NmRhYjVjOCIsInN1YiI6IjY0NzhhNWM1MDc2Y2U4MDEyOGZiY2Y4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.21dZupEWbcoQf3g2tADxfGFNUdod1DUdBatevQLvd20'
        }
      };

      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(response => response.json())
        .then((response) => {
          setMovies(response.results)
          setCategory("Now Playing");
        }).catch(err => console.error(err));
    }
    else if (category === "top-rated") {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjIyZDlmODhiNTY0ZjVjMjg3Yzk2MjM4NmRhYjVjOCIsInN1YiI6IjY0NzhhNWM1MDc2Y2U4MDEyOGZiY2Y4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.21dZupEWbcoQf3g2tADxfGFNUdod1DUdBatevQLvd20'
        }
      };

      fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then((response) => {
          setMovies(response.results)
          setCategory("Top Rated");
        }).catch(err => console.error(err));

    }
    else if (category === "upcoming") {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjIyZDlmODhiNTY0ZjVjMjg3Yzk2MjM4NmRhYjVjOCIsInN1YiI6IjY0NzhhNWM1MDc2Y2U4MDEyOGZiY2Y4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.21dZupEWbcoQf3g2tADxfGFNUdod1DUdBatevQLvd20'
        }
      };

      fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        .then(response => response.json())
        .then((response) => {
          setMovies(response.results)
          setCategory("Upcoming");
        }).catch(err => console.error(err));
    }
    else if (category === "home") {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjIyZDlmODhiNTY0ZjVjMjg3Yzk2MjM4NmRhYjVjOCIsInN1YiI6IjY0NzhhNWM1MDc2Y2U4MDEyOGZiY2Y4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.21dZupEWbcoQf3g2tADxfGFNUdod1DUdBatevQLvd20'
        }
      };

      fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then((response) => {
          setMovies(response.results)
          setCategory("Popular");
        }).catch(err => console.error(err));
    }
    else
    {
      setCategory(category);
    }
  }

  const getMovie = (movie) => {
    setMovie(movie);
  }

  return (<>
    <BrowserRouter>
      <header>
        <Menu getCategory={getCategory}/>
      </header>
      <main>
        <h2>{category}</h2>
        <Routes>
          <Route path="/" exact="/" element={<AllMovies movies={movies} getMovie={getMovie} />} />
          <Route path="/popular" exact="/popular" element={<AllMovies movies={movies} getMovie={getMovie} />} />
          <Route path="/now-playing" exact="/now-playing" element={<AllMovies movies={movies} getMovie={getMovie} />} />
          <Route path="/top-rated" exact="/top-rated" element={<AllMovies movies={movies} getMovie={getMovie} />} />
          <Route path="/upcoming" exact="/upcoming" element={<AllMovies movies={movies} getMovie={getMovie} />} />
          <Route path="/overview" exact="/overview" element={<MovieOverview movie={movie} getCategory={getCategory} />} />
          <Route path="/search" exact="/search" element={<Search getMovie={getMovie} getCategory={getCategory} />}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </>
  );
}



export default App;
