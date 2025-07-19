import { useState } from "react"

const editableNames = ["Laura", "Pedro", "Isabel"];

export const EditableList = () => {
    const [list, setList] = useState(editableNames);
    const [edit, setEdit] = useState();
    const [value, setValue] = useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };