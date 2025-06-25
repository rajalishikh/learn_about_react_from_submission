import { useState } from "react"

const useAddValue=(defaultValue=null)=>{
    const [value,setValue]=useState(defaultValue)

    const onChange=(e)=>{
        setValue(e.target.value)

    }
    return{
        value,onChange
    }

}
export default useAddValue