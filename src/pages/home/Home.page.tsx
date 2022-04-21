import React, {FunctionComponent, useState} from 'react';
import Grid from "../../components/grid/Grid";
import './Home.css'

const Home: FunctionComponent = () => {
    const [length, setLength] = useState(1);
    const [error, setError] = useState('');
    const setLengthValidation = (value: string) => {
        if (isNaN(parseInt(value)) || parseInt(value) < 1) {
            setError('Length must be greater than 1');
            return;
        }
        setLength(parseInt(value))
    }
    return <>
        <div className="form-length">
            <label htmlFor="length" className="form-label">Length of boxes: </label>
            <div>
                <input id="length" type="number" onChange={(e) => setLengthValidation(e.target.value)}/>
                {error ? (<span className="error-message">{error}</span>) : null}
            </div>
        </div>
        <Grid length={length}/>
    </>;
}

export default Home;