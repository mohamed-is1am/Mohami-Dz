import React from 'react' 
// import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { useContext } from "react";

export const Authcontext= createContext();
function Info_global({ children }) {
  const [user, setUser] = useState(()=>localStorage.getItem("info_user") ?JSON.parse(localStorage.getItem("info_pers")):null );
  const navigate = useNavigate();
  const register_user_client= async (e,first_name,last_name,username,email,password ,password1,address,phone_number)=>{
    e.preventDefault();
       const requestBody = {
        username: username,
        first_name: first_name,
        last_name: last_name,
        email: email,
        password1: password,
        password2: password1,
        Client_data: {
            address: address,
            phone_number: phone_number
        }
    };
    const response = await fetch("http://127.0.0.1:8000/users/signup/client/", {
      method: "POST",
      headers: {
          "Content-Type":"application/json"
      },
      body:  JSON.stringify(requestBody)
   })
   if(response.status === 200){
    const rep=await response.json()
    navigate('/SignIn')
    // ndiroha tdi ll paga nta3 login
  }
  else{
    const errorData = await response.json();
    console.log('err =',errorData);
    navigate('/SignIn')

  }
   }
   const register_user_avocat= async (e,first_name,last_name,username,email,password ,password1,address,phone_number,speciality,experiences,skills,adresse_cabinet_avocats,domaines_pratique)=>{
        e.preventDefault();
        const requestBody ={
        "username": username,
        "first_name":first_name,
        "last_name": last_name,
        "email":email,
        "password1": password,
        "password2": password1,
        "Avocat_data": {
        "specialty": speciality,
        "skills":skills,
        "address": address,
        "phone_number": phone_number,
        "experiences": experiences,
        "domaines_pratique":domaines_pratique,
        "adresse_cabinet_avocats": adresse_cabinet_avocats
        }
    }
    const response = await fetch("http://127.0.0.1:8000/users/signup/avocat/", {
      method: "POST",
      headers: {
      "Content-Type":"application/json"
      },
      body: JSON.stringify(requestBody)
   })
   if(response.status === 200){
    const rep=await response.json()
    // ndiroha tdi ll paga nta3 login
  }
  else{
    const errorData = await response.json();
    console.log('err =',errorData);
  }
   }

  const login = async (e, email, password) => {
    e.preventDefault();
    const requestBody = {
        "username": email,
        "password": password
    };

    try {
        const response = await fetch("http://127.0.0.1:8000/users/login/", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });

        if (response.status === 200) {
            const responseData = await response.json();
            console.log('response data:', responseData);
            localStorage.setItem("info_user", JSON.stringify(responseData.user));
            setUser(responseData.user)
            if (responseData.user.is_client) {
              navigate('/home')
            }else if (responseData.user.is_avocat) {
              navigate('/home')
            }
            // Vous pouvez utiliser responseData comme nécessaire
        } else {
            console.error("Request failed with status:", response.status);
        }
    } catch (error) {
        console.error("Error:", error);
    }
};


const get_avocats = async () => {
  try {
      const response = await fetch("http://127.0.0.1:8000/users/get_avocats/", {
          method: "GET",
          headers: {
              "Content-type": "application/json",
          },
      });

    console.log('response', response)
  } catch (error) {
      console.error("Error:", error);
  }
};
const rendez_vous = async (e, avocat, user, date, time) => {
  e.preventDefault();

  const requestBody = {
    "day": date,
    "time": time,
    "client": user.toString(),
    "avocat": avocat
  };
  console.log('requestBody', requestBody);


  const response = await fetch("http://127.0.0.1:8000/users/rendez_vous_view/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // Ajoutez cette ligne
    body: JSON.stringify(requestBody),
  });

  if (response.status === 201) {
    const rep = await response.json();
  } else {
    console.error("Request failed with status:", response.status);
  }
};

const Question = async (e, avocat, user,description) => {
  e.preventDefault();
  const requestBody = {
    "avocat": avocat,
    "client": user.toString(),
    "description": description,
  };
  console.log('requestBody', requestBody);

  const response = await fetch("http://127.0.0.1:8000/rendez_vous/Question_view/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // Ajoutez cette ligne
    body: JSON.stringify(requestBody),
  });

  if (response.status === 201) {
    const rep = await response.json();
  } else {
    console.error("Request failed with status:", response.status);
  }
};

      const datatransforme = {
      register_user_client:register_user_client,
      register_user_avocat:register_user_avocat,
      login:login,
      get_avocats :get_avocats,
      rendez_vous:rendez_vous,
      Question:Question,
      };
    
  return (
    <Authcontext.Provider value={datatransforme}>
    {children}
    </Authcontext.Provider>
  )
}

export default Info_global