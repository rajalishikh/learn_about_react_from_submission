import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Dad = () => {
    return (
        <div>
            <h2>Hi dad </h2>
            <div className="flex gap-3">
                <div className="border-4 border-violet-700 w-40 text-center">
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