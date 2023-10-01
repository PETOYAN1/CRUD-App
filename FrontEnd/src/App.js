import React from "react";
import {Routes, Route } from "react-router-dom";
import { Main } from "./Components/main";
import { SignUp } from "./Components/Registration/SignUp";
import { Login } from "./Components/Registration/Login";
import Home from "./Components/Home";
import Create from "./Components/Creating/create";
import Update from "./Components/Creating/update";
import Error from "./Components/Error";

function App () {
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/user" element={<Main />}/>
            <Route path="home" element={<Home />}/>
            <Route path="create" element={<Create />}/>
            <Route path="update/:id" element={<Update/>} />
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}
export default App;
