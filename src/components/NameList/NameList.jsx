import { useState } from "react";


const initialNames = ["Ana", "Luis", "Clara", "Sergio", "Marta"];

export const NamesList = () => {
    const [names, setNames] = useState(initialNames);

    return (
        <>
            <div>
                <h2>Names List</h2>
                <ul>
                    {names.map((element, index) => {
                        return <li key={index}>{element}</li>
                    })};
                </ul>
            </div>
        </>
    )
};
