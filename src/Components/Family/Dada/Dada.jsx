import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Unty from "../Unty/Unty";

const Dada = () => {
    return (
        
        <div className="border-4 border-violet-700 flex justify-center items-center p-3 m-3 ">
            <h2>From master  </h2>
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
            
        </div>
    );
};

export default Dada;