import React, {FunctionComponent, useMemo} from 'react';
import "./Grid.css";

type GridType = { length: number };
const Grid: FunctionComponent<GridType> = ({length }) => {
    const getBackground = (index: number) => {
        if (index % 3 === 0 && index % 5 === 0) return 'yellow';
        else if (index % 3 === 0) return 'red';
        else if (index % 5 === 0) return 'green';
        return 'white';
    }
    const items = useMemo(()=> Array.from({length}, (v, k) => {
        const item = k+1;
        return (<div className="item" key={item} style={{backgroundColor: getBackground(item)}}>{item}</div>)
    }), [length]);
    return <>
        <div className="container">
            {items}
        </div>
    </>;
}

export default Grid;