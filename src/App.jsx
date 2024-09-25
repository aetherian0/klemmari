import { Routes, Route, Link } from "react-router-dom";
import Ohjelma1 from "./Ohjelma1";
import Ohjelma2 from "./Ohjelma2";
import Ohjelma3 from "./Ohjelma3";
import "./App.css";

function App() {
    return (
        <div>
            <nav>
                <Link to="/Ohjelma1">Ohjelma 1</Link> |{" "}
                <Link to="/Ohjelma2">Ohjelma 2</Link> |{" "}
                <Link to="/Ohjelma3">Ohjelma 3</Link>
            </nav>

            <Routes>
                <Route path="/Ohjelma1" element={<Ohjelma1 />} />
                <Route path="/Ohjelma2" element={<Ohjelma2 />} />
                <Route path="/Ohjelma3" element={<Ohjelma3 />} />
            </Routes>
        </div>
    );
}

export default App;
