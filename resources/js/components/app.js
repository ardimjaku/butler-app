import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Add from "./add";
import Additem from "./item/additem";
import Edit from "./edit";
import EditItem from "./item/edititem";

function MainApp() {
    return (
        <Router className="App__container">
        <>
        <Routes>
            <Route path="/home"  element={<Home />} />
            <Route path="/add" exact element={<Add />}/>
            <Route path="/additem" exact element={<Additem />}/>
            <Route path="/edit/:id" exact element={<Edit />} />
            <Route path="/edit/item/:id" exact element={<EditItem />} />
        </Routes>
        </>
        </Router>
    );
}

export default MainApp;

if (document.getElementById('example')) {
    ReactDOM.render(<MainApp />, document.getElementById('example'));
}
