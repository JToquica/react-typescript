import { useState } from "react";
import { Timer } from "./Timer";

export const TimerPadre = () => {
    const [miliseconds, setMiliseconds] = useState<number>(1000);

    return (
        <>
            <span>Milisegundos: {miliseconds}</span>
            <br/>
            <div className="d-flex gap-2">
                <button type="button" onClick={() => setMiliseconds(1000)} className="btn btn-success">1000</button>
                <button type="button" onClick={() => setMiliseconds(2000)} className="btn btn-success">2000</button>
            </div>
            <Timer miliseconds={miliseconds}/>
        </>
    );
}
