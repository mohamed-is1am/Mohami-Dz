import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Header from './Components/Header';
import Hero from './Components/Hero';
import Footer from './Components/Footer';

function Layout() {
  return (
   <>
    <Header/>
    <Outlet />
    <Footer/>
   </>
  )
}
export default Layout