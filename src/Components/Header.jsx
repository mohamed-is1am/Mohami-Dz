import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  const storedUserInfo = localStorage.getItem("info_user");
  const [user, setUser] = useState(
    storedUserInfo ? JSON.parse(storedUserInfo) : null
  );

  const avocat = user && user.is_avocat;
  const client = user && user.is_client;
  const admin = user && user.is_admin;


console.log('client', client)
console.log('avocat', avocat)
  return (
    <header>
      <ul className="max-md:mb-[6px]">
        <li>
          <Link className="max-md:text-[16px]" to="/SignUp">
                  bien venu monieur l'avocat<h1> benali amine</h1>
          </Link>
             </li>
           
                {/* <h1>Welcome Monsieur l'avocat {user.username}</h1>
                         <h1>Nous rejoindre</h1>
                    </Link> */}
      
        <li>
          <Link className="max-md:text-[16px]" to="/">
            Contact
          </Link>
        </li>
        <li>
        <button className="text-[#FFF] mt-[16px] flex gap-[10px] items-center justify-center float-right uppercase font-[Montagu Slab]"><i class="fa-solid fa-right-to-bracket text-[16px]"></i>Deconnecter</button>
        </li>
      </ul>
      <NavBar />
    </header>
  );
};

export default Header;