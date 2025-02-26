import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ ...newMovie, rating: Number(newMovie.rating) });
    setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} value={newMovie.title} required />
      <input type="text" name="description" placeholder="Description" onChange={handleChange} value={newMovie.description} required />
      <input type="text" name="posterURL" placeholder="Poster URL" onChange={handleChange} value={newMovie.posterURL} required />
      <input type="number" name="rating" placeholder="Rating" onChange={handleChange} value={newMovie.rating} required />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
