import './App.css'
import Reusable from './Components/Reusable/Reusable'

function App() {
  const handleClick=(e)=>{
    console.log(e)

  }
  

  return (
    <>
     
      
      {/* <From></From> */}
      {/* <From2></From2> */}
      {/* <Learnref></Learnref> */}
      {/* <Simple></Simple> */}
      <Reusable TittleLogin={"Please give me your login information if you are a student "}></Reusable>
      <Reusable TittleLogin={"Please give me your login information If you are Teacher"}></Reusable>
      
      
    </>
  )
}

export default App
