import { useEffect, useRef } from "react";

const Learnref = () => {
    const nameRef=useRef(null)
    const emailRef=useRef(null)
    const passwordRef=useRef(null)

    const handleClick=(e)=>{
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    useEffect(()=>{
        nameRef.current.focus()
    },[])
    return (
        <div>
             <form className="text-center" onSubmit={handleClick}>
                <div>
                    <input ref={nameRef} defaultValue={"Your name is motu lal golapi  "} className="border border-s-black p-2 mb-2" type="text"  name="name" placeholder='write your name' />
                <br />
                <input ref={emailRef} className="border border-s-black p-2 mb-2" type="email" name="email" id="" placeholder='Write your email'/>
                <br />
                <input ref={passwordRef} className="border border-s-black p-2 mb-4" type="text" name="phone" placeholder='write your phone number' />
                <br />
                
                </div>
                <input  className="border border-s-black p-2 text-center" type="submit" value="submitted" />
                
            </form>
        </div>
    );
};

export default Learnref;