import { useEffect, useRef, useState } from "react";

type TimerProps = {
    miliseconds:number;
}

export const Timer:React.FC<TimerProps> = ({miliseconds}) => {
    const [seconds, setSeconds] = useState<number>(0);
    const refIntervalSecond = useRef<number | null>(null);

    useEffect(() => {
        refIntervalSecond.current = setInterval(() => {
            setSeconds(prevSecond => prevSecond + 1);
        }, miliseconds);
        
        return () => {
            refIntervalSecond.current && clearInterval(refIntervalSecond.current);
        };
    }, [miliseconds]);

    return (
        <>
            <h4>Timer: <small>{seconds}</small></h4>
        </>
    );
}
