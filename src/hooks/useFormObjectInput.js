import { useState } from "react";

const useFormObjectInput = (initialValue) => {
    const [object, setObject] = useState(initialValue);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setObject({...object, [name]: value});
    }

    const resetState = () => {
        setObject(initialValue);
    }

    const inputProps = {
        value: object,
        onChange: handleChange,
        resetState
    }

    return inputProps;
}

export default useFormObjectInput;