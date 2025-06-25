import useAddValue from "../Utility/Utility";

const Simple = () => {
    const custom =useAddValue("Bushra")
    const custom2 =useAddValue("write your email ")
    const custom3 =useAddValue("Write your name ")
    const handleClick=e=>{
        e.preventDefault()
        console.log(custom.value)
        console.log(custom2.value)
        console.log(custom3.value)

    }
    return (
        <div>
            <form className="text-center" onSubmit={handleClick}>
                <div>
                    <input {...custom} className="border border-s-black p-2 mb-2" type="text"  name="name" placeholder='write your name' />
                <br />
                <input {...custom2} className="border border-s-black p-2 mb-2" type="email" name="email" id="" placeholder='Write your email'/>
                <br />
                <input {...custom3} className="border border-s-black p-2 mb-4" type="text" name="phone" placeholder='write your phone number' />
                <br />
                
                </div>
                <input   className="border border-s-black p-2 text-center" type="submit" value="submitted" />
                
            </form>
            
        </div>
    );
};

export default Simple;