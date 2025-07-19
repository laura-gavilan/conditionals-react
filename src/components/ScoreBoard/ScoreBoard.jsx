import { useState } from "react";

const players = [
    { id: 1, name: "Mario", score: 10 },
    { id: 2, name: "Lucía", score: 15 },
    { id: 3, name: "David", score: 8 }
];

export const ScoreBoard = () => {
    const [playersList, setPlayersList] = useState(players);

    const increaseScore = (id) => {
        const updatedPlayers = playersList.map(player =>
            player.id === id
                ? { ...player, score: player.score + 1 }
                : player
        );
        setPlayersList(updatedPlayers);
    };

    const handleOnClick = (id) => () => {
        increaseScore(id);
    };

    return (
        <div>
            <h3>Score Board</h3>
            <ul>
                {playersList.map(({ id, name, score }) => (
                    <li key={id}>
                        {name} - Puntos: {score}{" "}
                        <button onClick={handleOnClick(id)}>Aumentar puntuación</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};