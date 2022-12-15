import React from "react";
import './practice.css';
import { useState } from "react";
const Practice = ()=>{
    const [fname ,setFistname] =useState('')
    const [lname ,setLastname] =useState('')


   const firstNameHandler = (event)=>{
       setFistname(event.target.value)
   }

   const lastNameHandler =(event)=>{
      setLastname(event.target.value)
   }

   const submitHandler =(event)=>{
       event.preventDefault();
      // to make the placehoder empty after you enter the input
    //   setFistname('')
    //   setLastname('')

    let choosedCase = parseInt(prompt("Enter the opeartion you want to perform on string"))
       switch(choosedCase){
        case 1:
            let someCharInfname = fname.at(0) 
            if(someCharInfname === 'a'){
                console.log("The character at index 0 is 'a" )
            }
            break;
        case 2:
             break;

        default:
            console.log("you enter invalid input")     
               
       }  
      
   }

    return(
        <div>
            <h2>This is the practice</h2>
            <form className="info_div" onSubmit={submitHandler}>
                <h2>Your Info</h2>
                <div>
                    <label for="fname">First name</label>
                    <input type="text"  onChange={firstNameHandler}/>
                </div>
                <div>
                    <label for="lname">Last name</label>
                    <input type="text"  onChange={lastNameHandler}/>
                </div>
                <div>
                    <button type="submit">save</button>
                </div>
            </form>
             <div>
                <h4>The above info you entered</h4>
                <h5>fname : {fname}</h5>
                <h6>lname :{lname}</h6>
             </div>
        </div>
    )
}
export default Practice;