import React ,{useState} from "react";
import './display.css';

const Display =(props)=>{
    const[grade,setGrade]=useState('')
    const gradeSetter=(event)=>{
        setGrade(event.target.value)
        
    }
    
    const submitHandler=(event)=>{
          event.preventDefault()
          props.onSaveGrade(grade)
         
    }

   
    


    return(
        <div>
            <h2>This is where the user information displayed</h2>
            <div className="display_area">
              <h3>Entered info:</h3>
               <h4> fistname: {props.infos.fname}</h4>
               <h4> lastname: {props.infos.lname}</h4>
               <h5>  email:  {props.infos.email}</h5>
                     {/*====What I do next here is that====
                     ===Next ,I want to make the grade input by selecting from the option like A,B,C,D and F.====
                      */}
             <form onSubmit={submitHandler} className="grade_submition_form">
               <label>Grade</label>
                 <input type="text" onChange={gradeSetter}/> 
                 <button type="submit">sendtouser</button> 
             </form>
            </div>
        </div>
    )
}

export default Display;