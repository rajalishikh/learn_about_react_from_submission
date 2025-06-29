import { useContext } from "react";
import { level1Context } from "../Dada/Dada";

const Brother = () => {
    const level2=useContext(level1Context)
    return (
        <div>
            <h2>My grandfather gives me a :{level2}</h2>
            
        </div>
    );
};

export default Brother;