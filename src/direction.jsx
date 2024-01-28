import React from 'react'
import { Link } from 'react-router-dom'
function Direction() {
  return (
    <div className="py-[80px] bg-[#21353d]">
    <h1 className="text-center text-[#FFF] mb-[30px] uppercase text-[40px]">Continuer tant que :</h1>
    <div className=" flex flex-col justify-center items-center gap-[30px]">
        <button className="text-[#21353d] flex gap-[20px] justify-center items-center text-[20px] w-[200px] bg-[#FFF] py-[10px] px-[20px] rounded-[10px] uppercase font-[Montagu Salu]"><Link to="/SignUp/avocat">avocat <i class="fa-solid fa-hammer"></i></Link></button>
        <button className="text-[#21353d] flex gap-[20px] justify-center items-center text-[20px] w-[200px] bg-[#FFF] py-[10px] px-[20px] rounded-[10px] uppercase font-[Montagu Salu]"><Link to="/SignUp/client">client <i class="fa-solid fa-hammer"></i></Link></button>
    </div>
    </div>
  )
}

export default Direction