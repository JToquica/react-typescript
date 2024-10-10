import { useReducer } from "react";

const initialState = {
    counter: 0
}

type CounterActionType = 
    | {type: "increment"}
    | {type: "decrement"}
    | {type: "custom", payload: number};

const counterReducer = (state: typeof initialState, action:CounterActionType) => {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                counter: state.counter + 1
            }
        case "decrement":
            return {
                ...state,
                counter: state.counter - 1
            }
        case "custom":
            return {
                ...state,
                counter: action.payload
            }
        default:
            return state;
    }
}

export const CounterRed = () => {
    const [{counter}, dispatch] = useReducer(counterReducer, initialState)

    return (
        <div className="my-5">
            <h2>Contador: {counter}</h2>

            <div className="d-flex gap-3">
                <button type="button" className="btn btn-primary" onClick={() => dispatch({type: "increment"})}>
                    +1
                </button>
                <button type="button" className="btn btn-danger" onClick={() => dispatch({type: "decrement"})}>
                    -1
                </button>
                <button type="button" className="btn btn-warning" onClick={() => dispatch({type: "custom", payload: 100})}>
                    100
                </button>
            </div>
        </div>
    )
}
