import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUs from './AboutUs';
import Home from './Home';
import Features from './Features';
import Blog from './Blog';
import ErrorPage from './ErrorPage';


const Layout = ({children}) => {
    return (
        <div >
       
            <Header></Header>
            <main>{children || <Home/> || <Features/> ||  <AboutUs/> || <Blog/> || <ErrorPage/>}</main>
            <Footer></Footer>

        </div>
    )

}
export default Layout