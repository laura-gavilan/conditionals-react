import { useState } from "react";

const Arraytasks = [
    { id: 1, title: "Hacer la compra" },
    { id: 2, title: "Llamar al médico" },
    { id: 3, title: "Estudiar React" }
];

export const TaskList = () => {
    const [task, setTask] = useState(Arraytasks);
    const [check, setCheck] = useState([]);

    const handleOnClick = (id) => {
        setCheck(prev => prev.includes(id)
            ? prev.filter(item => item !== id)

            : [...prev, id]);
    };

    return (
        <div>

            <h2>Task list</h2>

            <ul>
                {task.map((item) => {
                    return (
                        <>
                            <li key={item.id} style={{ textDecoration: check.includes(item.id) ? "line-through" : "none" }}>
                                {item.title}
                            </li>
                            <button onClick={() => handleOnClick(item.id)}>
                                {check.includes(item.id) ? "No completado" : "Completado"}
                            </button>
                        </>
                    )
                })}
            </ul>

        </div>
    );
};