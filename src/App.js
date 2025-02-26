import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "https://th.bing.com/th/id/OIP.b8WjJA8J2IJgblXaSliy3QHaLH?rs=1&pid=ImgDetMain",
      rating: 9,
    },
    {
      id: uuidv4(),
      title: "Interstellar",
      description: "A space exploration adventure",
      posterURL: "https://i.pinimg.com/originals/55/1c/e7/551ce7addcf80698739cc1f6564d866c.jpg",
      rating: 8.5,
    },
    {
      id: uuidv4(),
      title: "young african and famous",
      description: "This reality series follows a crew of famed, affluent stars as they work and play, flirt and feud in Johannesburg, South Africa..",
      posterURL: "https://the21mag.com/wp-content/uploads/2023/05/IMG_7303.jpg",
      rating: 8.5,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  const addMovie = (newMovie) => {
    setMovies([...movies, { id: uuidv4(), ...newMovie }]);
  };

  return (
    <div>
      <h1>My Movie App</h1>
      <Filter setSearchTerm={setSearchTerm} setRatingFilter={setRatingFilter} />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
