
const Reusable = ({TittleLogin,handleSubmit}) => {
    const handleLogin=e=>{
        e.preventDefault();
        const data={
            name:e.target.name.value,
            email:e.target.email.value,
            phone:e.target.phone.value,
        }
        handleSubmit(data)
    }
    return (
        <div>
            <h2 className="text-center">{TittleLogin}</h2>
            <form className="text-center" onSubmit={handleLogin} >
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

export default Reusable;