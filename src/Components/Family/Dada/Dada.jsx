import { createContext, useState } from "react";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Unty from "../Unty/Unty";

export const  level1Context=createContext();
export const MoneyContext=createContext()                  

const Dada = () => {

    const [money,setMoney]=useState(1000)
    return (
        
        <div className="border-4 border-violet-700 flex justify-center items-center p-3 m-3 ">
            <h2>From master  </h2>
            <MoneyContext.Provider value={[money,setMoney]}>
                <level1Context.Provider value="Golden ring ">
                <div className="border-4 border-violet-700 flex justify-center p-3 m-3 gap-4 w-auto" >
                
                <div className='border-4 border-violet-700 w-80 text-center'>
                    <Dad ></Dad>
                </div>
                <div className='border-4 border-violet-700 w-80 text-center '>
                    <Uncle ></Uncle>
                </div>
                <div className='border-4 border-violet-700 w-80 text-center'>
                    <Unty ></Unty>
                </div>
                
                

            </div>
            </level1Context.Provider>
            
            </MoneyContext.Provider>
        </div>
    );
};

export default Dada;