import { evaluate } from "mathjs";

export function calculate(expression){

try{
return evaluate(expression).toString()
}catch{
return "Error"
}

}

export function scientific(func,value){

switch(func){

case "sin":
return Math.sin(value)

case "cos":
return Math.cos(value)

case "tan":
return Math.tan(value)

case "sqrt":
return Math.sqrt(value)

case "log":
return Math.log10(value)

case "ln":
return Math.log(value)

default:
return value

}

}