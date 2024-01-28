import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from '../assets/logo.svg'

const NavBar = () => {
    const[model, setmodel] = useState(false)
    const [user, setUser] = useState(()=>localStorage.getItem("info_user") ?JSON.parse(localStorage.getItem("info_pers")):null );

    const avocat = user && user.is_avocat;
    const client = user && user.is_client;
    const admin = user && user.is_admin;
    
    
    const handdle = () => {
        setmodel(true)
    }
    const handdle1 = () => {
        setmodel(false)
    }

    return(
        <nav className="max-md:pl-[0] z-[1000]">
           <a href="#"><img src={img} alt="logo" /></a>
           <button onClick={handdle} className="hidden max-md:flex"><i class="fa-solid fa-bars"></i></button>
           <ul className={`max-md:${model ? 'flex' : 'hidden'} max-xl:gap-[40px] max-md:fixed max-md:top-[0] max-md:left-[0] max-md:h-[100vh] max-md:w-[100vw] z-[1000] max-md:bg-[#ffffff] max-md:flex-col	max-md:gap-[80px] max-md:justify-center`}>
                <li><a onClick={handdle1}  className="max-md:text-[26px]"><Link to="/home">Acceuil</Link></a></li>
                  <li><a onClick={handdle1}  className="max-md:text-[26px]"><Link to="/Profile">mes rendez_vous</Link></a></li>
                  <li><a onClick={handdle1}  className="max-md:text-[26px]"><Link to="/Rendez_vous">mes questions</Link></a></li>
                  <li><a onClick={handdle1}  className="max-md:text-[26px]"><Link to="/Profile">profile</Link></a></li>
        
                <button onClick={handdle1} className="hidden max-md:block text-[28px]"><i class="fa-solid fa-xmark"></i></button>
            </ul> 
            <div className="buttons">
                <Link to='/SignIn'><i className="fa-solid fa-plus"></i></Link>
                <div>
                    <span>FR</span>
                    <Link to='/Cabinets'><i className="fa-solid fa-magnifying-glass"></i></Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar