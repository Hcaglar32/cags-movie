import React, { useEffect, useState } from "react";
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from "axios";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.trim() == "") {
      getData();
    } else {
      searchMovieApi(searchQuery);
    }
  }, [searchQuery]);

  const getData = async (page = 2) => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=01a73c2decaf92451e35489578627fc3`,
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE3M2MyZGVjYWY5MjQ1MWUzNTQ4OTU3ODYyN2ZjMyIsInN1YiI6IjY1ZWFmNWIyOTRkOGE4MDE3YjhmYTlmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-2a79VjLsPayZuTleeZ0NUjXtWq3JLMIxRi58LoYUNA',
        'accept': 'application/json'
      }
    };

    try {
      const response = await axios(config);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Hata oluştu:', error);
    }
  };

  const searchMovieApi = async (query) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=01a73c2decaf92451e35489578627fc3`);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Hata oluştu:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container-fluid mx-auto">
      <div className="w-full">
        <SearchBar searchMoviePropApi={handleSearch} />
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
