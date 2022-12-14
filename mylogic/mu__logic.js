let name ="Abel"
console.log("Hello " + name)

let x = parseInt(prompt("enter the number"))
if(x===3){
    console.log("This is 3")
}
 else{
    console.log("this is not 3")
 }
 let y = parseInt(prompt("Enter the first number ")) 
    let z =parseInt(prompt("Enter the second number")) 
    
       if(y===z){
        console.log("You enter the same number for x and y So,")
        console.log("I don't want to do the operation on the operand which have equal values") 
       }
       else{
        
           let choicedOperator =prompt("Enter the operator")
            let result
            switch(choicedOperator){
                case '+':
                    result = y +z
                    console.log("The result is :" + result)     
                  break;
                 case '-':
                    result = y-z
                    console.log("The result is :" + result) 
                  break;
                 case '*':
                    result =y * z
                    console.log("The result is :" + result)  

            }
       }