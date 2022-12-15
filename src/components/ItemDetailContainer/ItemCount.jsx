import React from 'react'
import { useState } from 'react';

function ItemCount(props) {

const [count, setCount] = useState(1);

function handleSuma() {
        if (count < props.stock)
            setCount(count + 1);
    }

function handleResta() {
        setCount(count - 1);
    }

return (
    <div>
        <div className="contenedor-contador">
            <button className="btn-count" disabled={count === 1} onClick={handleResta}>-</button>
            <p>{count}</p>
            <button className="btn-count" onClick={handleSuma}>+</button>
        </div>
    <div>
        <button>Comprar</button>
    </div>
    </div>
    )
}

export default ItemCount;