import { useState } from "react";

const INITIAL_ORDER_FORM = {
    name: "",
    price: "",
};

export const OrderManager = () => {
    const [form, setForm] = useState(INITIAL_ORDER_FORM);
    const [orders, setOrders] = useState([]);
    const [completed, setCompleted] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name.trim() || !form.price.trim()) return; // evita vacíos

        const newOrder = {
            id: Date.now(),
            name: form.name,
            price: form.price,
        };

        setOrders(prev => [...prev, newOrder]);
        setForm(INITIAL_ORDER_FORM);
    };

    const completeOrder = (id) => {
        setOrders(prev => {
            const orderComplete = prev.find(order => order.id === id);
            if (orderComplete) {
                setCompleted(prev => [...prev, orderComplete]);
            }
            return prev.filter(order => order.id !== id);
        });
    };

    return (
        <div>
            <h3>Order Manager</h3>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nombre"
                />

                <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="Precio"
                />

                <button type="submit">Agregar pedido</button>
            </form>

            <h4>Pedidos Pendientes</h4>
            <ul>
                {orders.map(({ id, name, price }) => (
                    <li key={id}>
                        {name} - ${price}
                        <button onClick={() => completeOrder(id)}>Completar</button>
                    </li>
                ))}
            </ul>

            <h4>Pedidos Completados</h4>
            <ul>
                {completed.map(({ id, name, price }) => (
                    <li key={id}>
                        {name} - ${price}
                    </li>
                ))}
            </ul>
        </div>
    );
};