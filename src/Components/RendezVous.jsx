import React, { useEffect, useState } from "react";
import img from "../assets/liftarn_French_lawyer_early_20th_century. 1.svg"
import { useContext } from "react";
import { Authcontext } from "../info_global";

const RendezVous = () => {
  const storedUserInfo = localStorage.getItem("info_user");
    const [user, setUser] = useState(
        storedUserInfo ? JSON.parse(storedUserInfo) : null
      );
    
    const {rendez_vous}=useContext(Authcontext)

    const [avocats, setAvocats] = useState([]);
    const [avocatt, setAvocatt] = useState([]);
    const [date, setDate] = useState([]);
    const [time, setTime] = useState([]);
    // const [avocats, setAvocats] = useState([]);

    
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
        <section className="RendezVous" id="rendev-vous">
            <h1 className="special">Rendez-Vous</h1>
            <div className="content">
                <div className="image">
                    <img src={img} alt="laywer" className="max-md:mx-[auto]"/>
                </div>
                <form onSubmit={(e)=>{ rendez_vous(e,avocatt,user.id,date,time)}}>
                <label> avocat </label>
                <select onChange={(e) => setAvocatt(e.target.value)} value={avocatt}>
    <option defaultValue={''}>Choisir un avocat</option>
  {avocats.map((avocat) => (
    <option key={avocat.user_id} value={avocat.user_id}>
      {avocat.first_name} {avocat.last_name}
    </option>
  ))}
</select>
                    <input type="date" onChange={(e)=>setDate(e.target.value)} value={date} />
                    <select onChange={(e)=>setTime(e.target.value)} value={time}>
                       <option defaultValue={''}>Choisir le temps</option>
                        <option value="08 AM">08-09 AM</option>
                        <option value="09 AM">09-10 AM</option>
                        <option value="10 AM">10-11 AM</option>
                        <option value="11 AM">11-12 AM</option>
                        <option value="01 PM">01-02 PM</option>
                        <option value="02 PM">02-03 PM</option>
                        <option value="03 PM">03-04 PM</option>
                        <option value="04 PM">04-05 PM</option>

                    </select>
                    <textarea  placeholder="authre detaille"></textarea>
                    <input type="submit" value="VALIDER" />
                </form>
            </div>
        </section>
    )
}

export default RendezVous