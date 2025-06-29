import { useContext } from "react";
import { MoneyContext } from "../Dada/Dada";

const Uncle = () => {
    const[money,setMoney] =useContext(MoneyContext)
    return (
        <div>
            <h3>My father have some money  : {money} </h3>
            <p>In every month I give my father some Money 1000</p>
            <button className="bg-orange-500 p-3 rounded-xl " onClick={()=>setMoney(money+1000)}>ADD 1000</button>
            
        </div>
    );
};

export default Uncle;