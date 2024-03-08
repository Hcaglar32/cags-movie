import React, { Component, useEffect, useState } from "react";
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from "axios";


const App = () => {
  const [movies, setMovies] = useState([]);


  

  useEffect(() => {
    const axiosData = async () => {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=01a73c2decaf92451e35489578627fc3',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE3M2MyZGVjYWY5MjQ1MWUzNTQ4OTU3ODYyN2ZjMyIsInN1YiI6IjY1ZWFmNWIyOTRkOGE4MDE3YjhmYTlmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-2a79VjLsPayZuTleeZ0NUjXtWq3JLMIxRi58LoYUNA',
          'accept': 'application/json'
        }
      };

      try {
        const response = await axios(config);
        return response.data;
      } catch (error) {
        console.error('Hata oluştu:', error);
        throw error; // Hata durumunda hatayı yeniden fırlatın
      }
    };

    axiosData()
      .then(data => {
        setMovies(data.results)
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });

    axiosData();
  }, []);




  const [searchQuery, setSearchQuery] = useState("");




  const deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3000/movies/${movie.id}`);
    const newMovieList = movies.filter(m => m.id !== movie.id);
    setMovies(newMovieList);
  };

  const searchMovie = (event) => {
    setSearchQuery(event.target.value);
  }


  let filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
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
