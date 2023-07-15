import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { Routes, Route, Navigate } from "react-router-dom"
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Features from './components/Features';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage'


function App() {
  return (

    <Layout>
       <Routes>
       <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <AboutUs/> } />
        <Route path="features" element={ <Features/> } />
        <Route path="blog" element={ <Blog/> } />
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
  </Layout>
  );
}

export default App;
