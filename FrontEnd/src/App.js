import React from "react";
import {Routes, Route } from "react-router-dom";
import { Main } from "./Components/pages/main";
import { SignUp } from "./Components/Registration/SignUp";
import { Login } from "./Components/Registration/Login";
import Home from "./Components/pages/Home";
import Create from "./Components/Creating/create";
import Update from "./Components/Creating/update";
import Error from "./Components/pages/Error";
import Slider from "./Components/pages/slider/Slider";

function App () {
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/user" element={<Main sales="Sales Information"/>}/>
            <Route path="home" element={<Home name="Table of Users" create="Create"/>}/>
            <Route path="create" element={<Create />}/>
            <Route path="update/:id" element={<Update/>} />
            <Route path="/slider" element={<Slider/>} />
            <Route path="*" element={<Error name="Error" age={404}/>}/>
        </Routes>
    )
}
export default App;
