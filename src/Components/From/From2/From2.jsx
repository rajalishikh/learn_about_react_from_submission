import { useState } from "react";

const From2 = () => {
    const handleSubmit=(e)=>{
         e.preventDefault()
        console.log("Murogbi hmm hmm ")
        console.log(name,email,phone)

    }
    // state for name 
    const [name,setName]=useState("MY name is Raj")
    const handleChangeName=e=>{
        setName(e.target.value)
        console.log(e.target.value)
    }
    // state for email 

    const [email,setEmail]=useState("nahidujjamanraj@gmail.com")
    const handleEmailChange=e=>{
        setEmail(e.target.value)
        console.log(e.target.value)

    }
    // state for phone number 
    const [phone,setPhone]=useState("09557-788226")
    const handlePhoneChange=e=>{
        setPhone(e.target.value)
        console.log(e.target.value)

    }
    return (
        <div>
           <form className="text-center" onSubmit={handleSubmit} >
                <div>
                    <input value={name} onChange={handleChangeName} className="border border-s-black p-2 mb-2" type="text"  name="name" placeholder='write your name' />
                <br />
                <input value={email} onChange={handleEmailChange} className="border border-s-black p-2 mb-2" type="email" name="email" id="" placeholder='Write your email' required />
                <br />
                <input value={phone} onChange={handlePhoneChange} className="border border-s-black p-2 mb-4" type="text" name="phone" placeholder='write your phone number' required />
                <br />
                
                </div>
                <input   className="border border-s-black p-2 text-center" type="submit" value="submitted" />
                
            </form>
            
        </div>
    );
};

export default From2;