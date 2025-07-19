import { useState } from "react";

const products = [
    { name: "Camiseta", price: 19.99 },
    { name: "Pantalón", price: 29.99 },
    { name: "Zapatillas", price: 49.99 }
];

export const ProductList = () => {
    const [product, setProduct] = useState(products);

    return (
        <div>
            <>
                <h2>Products List</h2>

                <ul>
                    {products.map((element, index) => {
                        return <li key={index}>{element.name} - {element.price}</li>
                    })}
                </ul>
            </>
        </div>
    );
};