import { useState } from "react"
import { calculate } from "../logic/calculatorEngine"

export default function Calculator(){

const [expression,setExpression] = useState("")
const [result,setResult] = useState("0")

function press(val){

if(val==="="){

const res = calculate(expression)
setResult(res)

}else if(val==="AC"){

setExpression("")
setResult("0")

}else{

setExpression(expression + val)

}

}

return(

<div className="bg-black text-white p-6 rounded-xl w-80">

<div className="text-right mb-4">

<div className="text-gray-400 text-sm">{expression}</div>
<div className="text-3xl">{result}</div>

</div>

<div className="grid grid-cols-4 gap-3">

{[
"AC","(",")","/",
"7","8","9","*",
"4","5","6","-",
"1","2","3","+",
"0",".","="

].map((b)=>(

<button
key={b}
onClick={()=>press(b)}
className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700"
>
{b}
</button>

))}

</div>

</div>

)

}