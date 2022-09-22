import {useState} from 'react';
import "./styles/index.scss";


import {Router} from "./Router.jsx"

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Router/>
        </div>
    );
}

export default App;
