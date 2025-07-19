import { useState } from "react";

const menu = [
    { name: "Tortilla de patatas", price: 6.5, category: "Entrante" },
    { name: "Paella", price: 12.9, category: "Principal" },
    { name: "Tarta de queso", price: 4.5, category: "Postre" }
];

export const RestaurantMenu = () => {
    const [category, setCategory] = useState("");

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    const filterMenu = menu.filter(prev => prev.category === category);

    return (
        <div>
            <h3>Restaurante Menu</h3>

            <select name="menu"
                value={category}
                onChange={handleChange}>
                <option value="">Selecciona el menú</option>
                <option value="Entrante">Entrante</option>
                <option value="Principal">Principal</option>
                <option value="Postre">Postre</option>
            </select>

            <ul>
                {filterMenu.map(({ name, price}, index) => {
                    return ( <li key={index}>{name} - {price.toFixed(2)}</li>)
                })}
            </ul>
        </div>
    );
};