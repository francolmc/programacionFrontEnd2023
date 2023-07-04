import {useState} from "react";

const Contador = () => {
    const [countValue, setCountValue] = useState(0);
    const countClick = () => {
        setCountValue(countValue + 1);
    };

    return <button onClick={countClick}>Contador: {countValue}</button>
}

export default Contador;
