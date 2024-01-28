import React, {useState} from "react";
import Header from "../../Components/Header";
import './SignUp.css'
import img1 from '../../assets/Group.png'
import Particulier from "./Particulier";
import Avocat from './Avocat'
import img from '../../assets/google.png'

const SignUp_admin = () => {
    const [showContent1, setShowContent1] = useState(true);
    const handleButtonClick1 = () => {
        setShowContent1(true);
    };
    const handleButtonClick2 = () => {
        setShowContent1(false);
    };


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
                                AUTHENTICATION POUR admin
                    </button>
                </div>
                <div className="Particulier">
            <div className="Sign-content max-md:!py-[80px] max-md:!px-[20px]">
                    <div>
                        <span>OU</span>
                    </div>
                    <h2 className="max-md:!text-[25px]">Créez votre compte</h2>
                    <form action="">
                        <div className="max-md:!px-[0]">
                            <input type="text" placeholder="M."/>
                            <input type="text" placeholder="Mme"/>
                            <input type="text" placeholder="Sociéte"/>
                        </div>
                        <input type="text" placeholder="Nom de famille" />
                        <input type="text" placeholder="Prénom" />
                        <div className="max-md:!px-[0]">
                            <input type="number" placeholder="Jour"/>
                            <input type="text" placeholder="Mois"/>
                            <input type="number" placeholder="Anées"/>
                        </div>
                        <input type="text" placeholder="Votre lieu de naissance" className="notThis" />
                        <div className="max-md:!px-[0]">
                            <input className="max-md:!w-[140px]" type="number" placeholder="Code postal" />
                            <input className="max-md:!w-[140px]" type="text" placeholder="ville"/>
                        </div>
                        <input type="email" placeholder="Adresse email qui servira comme identifiant" required/>
                        <input type="password" placeholder="Mot de passe" />
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
export default SignUp_admin