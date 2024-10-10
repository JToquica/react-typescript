import { useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState<number>(0);

    const incrementar = (numero:number = 1):void => setCounter(counter + numero);

    return (
        <div className="mt-5">
            <h3>Counter: useState</h3>
            <span>Valor: {counter}</span>
            <br />
            <div className="d-flex gap-2">
                <button onClick={() => incrementar()} type="button" className="btn btn-primary mt-2">
                    +1
                </button>
                <button onClick={() => incrementar(2)} type="button" className="btn btn-primary mt-2">
                    +2
                </button>
                <button onClick={() => setCounter(0)} type="button" className="btn btn-danger mt-2">
                    Reset
                </button>
            </div>
        </div>
    );
}
