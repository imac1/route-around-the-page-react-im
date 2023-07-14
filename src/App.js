import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { Routes, Route } from "react-router-dom"
import AboutUs from './components/AboutUs';


function App() {
  return (

    <Layout>
       <Routes>
       
        <Route path="about" element={ <AboutUs/> } />
      
      </Routes>
  
  </Layout>
  );
}

export default App;
