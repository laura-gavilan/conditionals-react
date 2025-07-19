import { useState } from "react";


const INITIAL_FORM = {
    name: "",
    cant: "",
};

const list = [];

export const DynamicShoppingList = () => {
    const [form, setForm] = useState(INITIAL_FORM);
    const [elementsList, setElementList] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setElementList(prev => [...prev, { ...form }]);
        setForm(INITIAL_FORM);
    };

    return (
        <>
            <div>
                <h3>Shopping List</h3>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Nombre del producto" />

                    <input type="number"
                        name="cant"
                        value={form.cant}
                        onChange={handleChange}
                        placeholder="cantidad" />

                    <button type="submit">Agregar prducto</button>
                </form>

                <ul>
                    {elementsList.map((element, index) => {
                        return (
                            <li key={index}>{element.name} - {element.cant}</li>
                        )
                    })}
                </ul>

            </div >
        </>
    );
};