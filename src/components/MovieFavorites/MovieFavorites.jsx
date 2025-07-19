import { useState } from "react";

const movies = [
    { id: 1, title: "El laberinto del fauno" },
    { id: 2, title: "Mar adentro" },
    { id: 3, title: "Ocho apellidos vascos" }
];

export const MovieFavorites = () => {
    const [moviesList, setMoviesList] = useState(movies);

    const handleChange = (id) => {
        setMoviesList(prev => prev.filter(movie => movie.id !== id));
    };

    const handleOnSubmit = (id) => {
        handleChange(id);
    };

    return (
        <div>
            <h3>Movie Favorites</h3>

            <ul>
                {moviesList.map(({ id, title }) => (
                    <li key={id}>
                        {title}
                        
                        <button onClick={() => handleOnSubmit(id)}>Quitar película</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};