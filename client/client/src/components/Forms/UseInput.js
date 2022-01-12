import { useState } from "react";

const useInput = (initialVal) => {
    const [value, setValue] = useState(initialVal);
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return {
        value,
        onChange: handleChange
    }
}

export default useInput;