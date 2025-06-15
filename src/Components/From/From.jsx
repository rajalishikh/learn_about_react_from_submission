
const From = () => {
    const handleClick=e=>{
        e.preventDefault();
        console.log("Button submitted")
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
    }
    return (
        <div  className="flex justify-center " >
            <form className="text-center" onSubmit={handleClick}>
                <div>
                    <input className="border border-s-black p-2 mb-2" type="text"  name="name" placeholder='write your name' />
                <br />
                <input className="border border-s-black p-2 mb-2" type="email" name="email" id="" placeholder='Write your email'/>
                <br />
                <input className="border border-s-black p-2 mb-4" type="text" name="phone" placeholder='write your phone number' />
                <br />
                
                </div>
                <input  className="border border-s-black p-2 text-center" type="submit" value="submitted" />
                
            </form>
            
        </div>
    );
};

export default From;