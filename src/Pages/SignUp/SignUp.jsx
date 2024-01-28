import React, {useEffect, useState} from "react";
import Header from "../../Components/Header";
import './SignUp.css'
import img1 from '../../assets/Group.png'
import Particulier from "./Particulier";
import Avocat from './Avocat'
import img from '../../assets/google.png'
import { useContext } from "react";
import { Authcontext } from "../../info_global";
import axios from "axios";
const SignUp = () => {
    const [showContent1, setShowContent1] = useState(true);
    const handleButtonClick1 = () => {
        setShowContent1(true);
    };
    const handleButtonClick2 = () => {
        setShowContent1(false);
    };
    const [email,setEmail]=useState('')
    const [first_name,setfirst_name]=useState('')
    const [last_name,setlast_name]=useState('')
    const [speciality,setspeciality]=useState('')
    const [address,setaddress]=useState('')
    const [phone_number,setphone_number]=useState('')
    const [experiences,setexperiences]=useState('')
    const [domaines_pratique,setdomaines_pratique]=useState('')
    const [skills,setskills]=useState('')
    const [adresse_cabinet_avocats,setadresse_cabinet_avocats]=useState('')
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [password1,setPassword1]=useState('')
    const {register_user_avocat}=useContext(Authcontext)
    
   
      
    return(
        <div className="SignUp">                      
            <div className="Sign max-md:!py-[0] max-md:!px-[20px] bg-[#e9e1d7]">
                <h1 className="special mb-[80px] z-[1000] !text-[40px] relative">Devenir Un Dz-Mouhami</h1>
                <div className="buttons">
                    <button 
                        onClick={handleButtonClick1} 
                        style={{backgroundColor: showContent1 ? "#FFF" : "#E9E9E9" , 
                                borderBottom: showContent1 ? "solid 5px red" : "none",
                                borderTop: !showContent1 ? "solid 5px #E9E9E9": "none"}}>
                                AUTHENTICATION POUR AVOCAT
                    </button>
                </div>
                <div className="Particulier">
            <div className="Sign-content max-md:!py-[80px] max-md:!px-[20px]">
                    <div>
                    <button><img src={img} alt="" />s'identifier avec google</button>
                    
                        <span>OU</span>
                    </div>
                    <h2 className="max-md:!text-[25px]">Créez votre compte</h2>
                    <form  onSubmit={(e)=>{ register_user_avocat(e,first_name,last_name,username,email,password ,password1,address,phone_number,speciality,experiences,skills,adresse_cabinet_avocats,domaines_pratique)}}>
                        <input type="text" placeholder="Nom de famille" onChange={(e)=>setfirst_name(e.target.value)} value={first_name} />
                        <input type="text" placeholder="Prénom" onChange={(e)=>setlast_name(e.target.value)} value={last_name} />
                        <input type="text" placeholder="nom d'utilsateur" onChange={(e)=>setUsername(e.target.value)} value={username} /> 
                        <input type="email" placeholder="Adresse email qui servira comme identifiant"  onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        <input type="text" placeholder="phone_number" onChange={(e)=>setphone_number(e.target.value)} value={phone_number} />
                        <input type="text" placeholder="address" onChange={(e)=>setaddress(e.target.value)} value={address} />
                        <input type="text" placeholder="speciality" onChange={(e)=>setspeciality(e.target.value)} value={speciality} />
                        <input type="text" placeholder="skills" onChange={(e)=>setskills(e.target.value)} value={skills} />
                        <input type="text" placeholder="experiences" onChange={(e)=>setexperiences(e.target.value)} value={experiences} />
                        <input type="text" placeholder="adresse_cabinet_avocats" onChange={(e)=>setadresse_cabinet_avocats(e.target.value)} value={adresse_cabinet_avocats} />
                        <input type="text" placeholder="domaines_pratique" onChange={(e)=>setdomaines_pratique(e.target.value)} value={domaines_pratique} />
                        {/* <div className="max-md:!px-[0]">
                            <input type="number" placeholder="Jour"/>
                            <input type="text" placeholder="Mois"/>
                            <input type="number" placeholder="Anées"/>
                        </div> */}
                        {/* <input type="text" placeholder="Votre lieu de naissance" className="notThis" /> */}
                        {/* <div className="max-md:!px-[0]">
                            <input className="max-md:!w-[140px]" type="number" placeholder="Code postal" />
                            <input className="max-md:!w-[140px]" type="text" placeholder="ville"/>
                        </div> */}
                        {/* <input type="email" placeholder="Adresse email qui servira comme identifiant" required/> */}
                        <input type="password" placeholder="Mot de passe" onChange={(e)=>setPassword(e.target.value)} value={password} />
                        <input type="password" placeholder="Mot de passe" onChange={(e)=>setPassword1(e.target.value)} value={password1} />
                        <button type="submit">Créer mon compte <i class="fa-solid fa-angle-right"></i></button>
                    </form>
                </div>
        </div>
            </div>
            <img className="max-md:!top-[210px]" src={img1} alt="" />
            <div className="overlay"></div>
        </div>
    )
}
export default SignUp