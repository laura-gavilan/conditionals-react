import { useState } from "react";

const toggles = [
    { id: 1, label: "Notificaciones" },
    { id: 2, label: "Modo oscuro" },
    { id: 3, label: "Sonido" }
];

export const ToggleItemList = () => {
    const [state, setState] = useState({});

    const handleToogle = (id) => {
        setState((prev => ({
            ...prev,
            [id]: !prev[id]
        })));
    };

    const handleOnClick = (id) => {
        handleToogle(id);
    };

    return (
        <div>
            <h3>Toogle Item List</h3>

            <ul>
                {toggles.map((toggle) => {
                    return (
                        <li key={toggle.id}>{toggle.label}
                            <button onClick={() => handleOnClick(toggle.id)}>
                                {state[toggle.id] ? "Desactivar" : "Activar"}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}