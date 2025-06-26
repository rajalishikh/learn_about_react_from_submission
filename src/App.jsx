import './App.css'
import Dada from './Components/Family/Dada/Dada'

function App() {
  const handleClick=(e)=>{
    console.log(e)

  }
  const handleStudentLogin=(e)=>{
    console.log("Student login",e)

  }
  const handleTeacherLogin=(e)=>{

  }
  

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
     
      
      {/* <From></From> */}
      {/* <From2></From2> */}
      {/* <Learnref></Learnref> */}
      {/* <Simple></Simple> */}
      {/* <Reusable handleSubmit={handleStudentLogin} TittleLogin={"Please give me your login information if you are a student "}></Reusable>
      <Reusable handleSubmit={handleTeacherLogin} TittleLogin={"Please give me your login information If you are Teacher"}></Reusable> */}
      <div>
        <Dada></Dada>

      </div>
      
      
      
    </div>
  )
}

export default App
