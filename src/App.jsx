import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout />}>
          <Route index element={ <Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
