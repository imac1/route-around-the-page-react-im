import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUs from './AboutUs';



const Layout = ({children}) => {
    return (
        <div >
       
            <Header></Header>
            <main>{children || <AboutUs/>}</main>
            <Footer></Footer>

        </div>
    )

}
export default Layout