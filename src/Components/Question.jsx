import React, { useEffect, useState } from "react";
import img from '../assets/group.svg'
import img1 from '../assets/question.png'
import { useContext } from "react";
import { Authcontext } from "../info_global";
const Question = () => {
    const storedUserInfo = localStorage.getItem("info_user");
    const [user, setUser] = useState(
        storedUserInfo ? JSON.parse(storedUserInfo) : null
      );
    
    const {Question}=useContext(Authcontext)

    const [avocats, setAvocats] = useState([]);
    const [avocatt, setAvocatt] = useState([]);
    const [description, setDescription] = useState([]);
    useEffect(() => {
        const fetchAvocats = async () => {
          try {
            const response = await fetch("http://127.0.0.1:8000/users/get_avocats/", {
              method: "GET",
              headers: {
                "Content-type": "application/json",
              },
            });
    
            if (response.ok) {
             const avocatsData = await response.json();
              setAvocats(avocatsData['avocats']);
            } else {
              console.error("Request failed with status:", response.status);
            }
          } catch (error) {
            console.error("Error:", error);
          }
        };
        fetchAvocats();
        // console.log('avocats', avocats)
      }, []);
      console.log('avocats', avocats)
    return(
        <section className="Question" id="question">
            <h1 className="special">Poser Une question</h1>
            <form onSubmit={(e)=>{ Question(e,avocatt,user.id,description)}}>
               
                <select>
                    <option value="">Administrateur</option>
                    <option value="">Avocat</option>
                </select>

                <label> avocat </label>
                <select onChange={(e) => setAvocatt(e.target.value)} value={avocatt}>
                    <option defaultValue={''}>Choisir un avocat</option>
                     {avocats.map((avocat) => (
                       <option key={avocat.user_id} value={avocat.user_id}>
                     {avocat.first_name} {avocat.last_name}
                   </option>
             ))}
                </select>
                <textarea placeholder="Le conteunus du Question" onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
                <button type="submit">Valider <span></span></button>
            </form>
            <img src={img1} alt="icons of question mark" />
            <img src={img} alt="vectors" />
        </section>
    )
}

export default Question