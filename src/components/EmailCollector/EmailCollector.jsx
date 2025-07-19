import { useState } from "react"


export const EmailCollector = () => {
    const [email, setEmail] = useState("");
    const [emailsList, setEmailsList] = useState([]);

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        setEmailsList(prev => [...prev, email]);
        setEmail("");
    };

    return (
        <div>
            <h3>Email Collector</h3>

            <input type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Introduce tu email" />

            <button onClick={handleOnSubmit}>Agregar email</button>

            <ul>
                {emailsList.map((email, index) => {
                    return (<li key={index}>{email}</li>)
                })}
            </ul>
        </div>
    );
};