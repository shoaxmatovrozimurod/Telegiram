import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePages from "./Pages/HomePages/HomePages";
import Layout from './Companents/Layout/Layout';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element = {<Layout />}>
      <Route index element = {<HomePages />} />

      

      </Route>
    </Routes>

    
    </BrowserRouter>

    </>
  )
}

export default App