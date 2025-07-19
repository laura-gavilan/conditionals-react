import { useState } from "react";

const users = [
    { id: 1, name: "Antonio" },
    { id: 2, name: "Beatriz" },
    { id: 3, name: "Carmen" },
    { id: 4, name: "" },
    { id: 5, name: "" },
];



export const UserFiltersList = () => {
    const [listUsers, setListUsers] = useState(users);
    const [userText, setUsersText] = useState("");

    const handleChange = (event) => {
        setUsersText(event.target.value);
    };

    const handleOnSubmit = () => {
        const filterUser = users.filter(user => user.name.toLowerCase().includes(userText.toLowerCase()));
        setListUsers(filterUser);
    };


    return (
        <div>
            <h3>User filters List</h3>

            <input 
            type="text"
            value={userText}
            onChange={handleChange}
            placeholder="Buscar usuario"/>

            <button onClick={handleOnSubmit}>Búsqueda de usuario</button>

            <ul>
                {listUsers.map((user) =>{
                    return ( <li key={user.id}>{user.name}</li>)
                })}
            </ul>
        </div>
    );
};