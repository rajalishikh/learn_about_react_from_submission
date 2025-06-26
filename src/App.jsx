import './App.css'
import Reusable from './Components/Reusable/Reusable'

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
    <>
     
      
      {/* <From></From> */}
      {/* <From2></From2> */}
      {/* <Learnref></Learnref> */}
      {/* <Simple></Simple> */}
      <Reusable handleSubmit={handleStudentLogin} TittleLogin={"Please give me your login information if you are a student "}></Reusable>
      <Reusable handleSubmit={handleTeacherLogin} TittleLogin={"Please give me your login information If you are Teacher"}></Reusable>
      
      
    </>
  )
}

export default App
