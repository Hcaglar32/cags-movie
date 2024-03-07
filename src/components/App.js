import React, { useState } from "react";
import SearchBar from './SearchBar';
import MovieList from './MovieList';

const App = () => {
  const [movies, setMovies] = useState([
    {
      "name": "The Matrix 3",
      "rating": "8.1",
      "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
      "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
      "id": 1
    },
    {
      "name": "Hostage",
      "rating": "6.3",
      "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4hne3v6jN4MlCnhSkxOW7YspJhr.jpg",
      "overview": "When a mafia accountant is taken hostage on his beat, a police officer – wracked by guilt from a prior stint as a negotiator – must negotiate the standoff, even as his own family is held captive by the mob.",
      "id": 2
    }
  ]);

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
