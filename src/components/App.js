import React, { Component, useEffect, useState } from "react";
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import { data } from "autoprefixer";

const App = () => {
  const [movies, setMovies] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = "http://localhost:3000/movies";
      const response = await fetch(baseUrl);
      const data = await response.json();
      console.log(response);
      console.log(data);
      setMovies(data); 
    };
  
    fetchData();
  }, []);
  

  const [searchQuery, setSearchQuery] = useState("");

  const deleteMovie = (movie) => {
    const newMovieList = movies.filter(m => m.id !== movie.id);
    setMovies(newMovieList);
  };

  const searchMovie = (event) => {
    setSearchQuery(event.target.value);
  }

  let filteredMovies = movies.filter((movie) => {
    return movie.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
  });

  return (
    <div className="container-fluid mx-auto">
      <div className="w-full">
        <SearchBar searchMovieProp={searchMovie} />
      </div>
      <MovieList movies={filteredMovies} deleteMovieProp={deleteMovie} />
    </div>
  );
};

export default App;
