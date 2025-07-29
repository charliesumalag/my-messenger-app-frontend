import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout />}>
          <Route index element={ <Login />}></Route>
          <Route path='register' element={ <Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
