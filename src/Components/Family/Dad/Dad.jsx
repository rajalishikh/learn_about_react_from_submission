import { useContext } from "react";
import Brother from "../Brother/Brother";
import { level1Context } from "../Dada/Dada";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Dad = () => {
    const level1=useContext(level1Context)
    return (
        <div>
            <h2>Hi dad </h2>
            <div className="flex gap-3">
                <div className="border-4 border-violet-700 w-40 text-center">
                    <h2> {level1}My grand father give me </h2>
                    <Myself></Myself>
                </div>
                <div className="border-4 border-violet-700 w-40 text-center">
                    <Brother></Brother>
                </div>
                <div className="border-4 border-violet-700 w-40 text-center">
                    <Sister></Sister>
                </div>
                
                
                
            </div>
            
        </div>
    );
};

export default Dad;