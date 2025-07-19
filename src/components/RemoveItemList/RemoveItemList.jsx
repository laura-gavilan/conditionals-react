import { useState } from "react";

const items = ["Mesa", "Silla", "Lámpara", "Sofá"];

export const RemoveItemList = () => {
    const [elementsList, setElementsList] = useState(items);

    const handleOnClick = (indexDelete) => {
        setElementsList((prev) => prev.filter((_, index) => index !== indexDelete));
    };


    return (
        <div>
            <h2>Item List</h2>

            <ul>
                {elementsList.map((element, index) => {
                    return (
                        <li key={index}>{element}

                            <button onClick={() => handleOnClick(index)}>Eliminar</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};