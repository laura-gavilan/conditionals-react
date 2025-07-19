import { useState } from "react"

export const AddFruitForm = () => {
    const [fruit, setFruit] = useState("");
    const [fruitList, setFruitList] = useState([]);

    const handleOnChange = (event) => {
        setFruit(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        setFruitList(prev => [...prev, fruit]);
        setFruit("");
    }

    return (
        <div>
            <h2>Fruit Form</h2>
            <form onSubmit={handleOnSubmit}>
                <input 
                type="text"
                value={fruit}
                onChange={handleOnChange}
                placeholder="Introduce una fruta"/>

                <button type="submit">Añadir</button>
            </form>

            <ul>
                {fruitList.map((fruits) => {
                    return (
                        <li key={fruits}>{fruits}</li>
                    )
                })}
            </ul>
        </div>
    );
};