import React ,{Component}from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Navigation from './components/Navigation'
import Register from "./pages/Register";


class  App extends Component {
    render() {
        return (
        <BrowserRouter>
            <div className="App">
                <Navigation/>
            <Routes>

                <Route path="/" Component={Home}></Route>
                <Route path="/About" Component={About}></Route>
                <Route path="/Login" Component={Login}></Route>
                <Route path="/Contactus" Component={Contactus}></Route>
                <Route path="/Register" Component={Register}></Route>

            </Routes>
            </div>

        </BrowserRouter>

        );
    }
}


export default App;
