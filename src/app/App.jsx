import {useState} from 'react';
import {Router} from "./Router.jsx"
import Header from "./header/header";
import "./styles/index.scss"

function App() {
    return (
        <div className="App">
          <Header/>
            <Router/>
        </div>
    );
}

export default App;
