import { User } from "./components/User";
import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import { CounterRed } from "./components/CounterRed";
import { Formulario } from "./components/Formulario";
import { Formulario2 } from "./components/Formulario2";

function App() {
  return (
    <>
      <h1>React + Typescript</h1>

      <hr />

      <h2>useState</h2>
      <Counter />
      <User />

      <hr/>

      <h2>useEffect + useRef + Custom Props</h2>
      <TimerPadre />
      
      <hr/>

      <h2>useReducer</h2>
      <CounterRed />
      
      <hr/>
      
      <h2>Custom Hooks</h2>

      <div className="d-flex flex-column flex-md-row gap-4">
        <Formulario />
        <Formulario2 />
      </div>
    </>
  );
}

export default App