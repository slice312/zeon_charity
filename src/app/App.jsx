import {Router} from "./Router.jsx"
import "./styles/index.scss";
import Header from "./header/header";


export const App = () => {
    return (
        <div className="App">
          <Header/>
            <Router/>
        </div>
    );
};

