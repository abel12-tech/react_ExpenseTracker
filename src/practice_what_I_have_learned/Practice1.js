/*=======Description for my practice 1=====
Practice1 is about:
   1.How to use state and event by sending the information or by filling the form in one
   component and use that information in other component here in my Display component


  2.Child-to-parent comminication(here ,Display component to Practice1 ):.i.e.In react the straight forward is communication is 
  the parent to child communication Here from Practice1 component to Display  

  ====Here I do child to parent communication by sending the grade  from the Display 
   component to Practice1======

   
=====Generally ,This practice is all about child-to-parent and parent-to-child communication     

*/



import React,{useState} from "react";
import "./practice1.css";
import Display from './Display'
const Practice1 =()=>{
  const[firstname ,setEnteredFname] =useState('');
  const[lastname ,setEnteredLname] =useState('');
  const[email ,setEnteredEmail] =useState('');
  const [enteredInfo ,setEnteredInfo] =useState({
    fname:'',
    lname:'',
    email:'',
  })

  const[grade,setGrade]=useState('')


  const firstNameEnterHandler =(event)=>{
      setEnteredFname(event.target.value)
  }

  const lastNameEnterHandler =(event)=>{
    setEnteredLname(event.target.value)
  }

  const emailEnterHandler =(event)=>{
    setEnteredEmail(event.target.value)
    
  }

  const submitHandler=(event)=>{
    event.preventDefault();
      setEnteredInfo({
        fname:firstname,
        lname:lastname,
        email:email,

      })
    
    
  }

  const saveGradeHandler=(gradeEntered)=>{
       setGrade(gradeEntered)
  }

 

    return(
        <div>
            <h1 className="practice">Practice1</h1>
            <h3 className="practice_title">Taking input from the user and display it to other components</h3>
            <form onSubmit={submitHandler} className="form_div">
                <div className="label_input">
                    <label>First name</label>
                    <input type="text" onChange ={firstNameEnterHandler}/>
                </div>
                <div className="label_input">
                    <label>Last name</label>
                    <input type="text" onChange={lastNameEnterHandler}/>
                </div>
                <div className="label_input">
                    <label>Address</label>
                    <input type="email" onChange={emailEnterHandler}/>
                </div>
                <div>
                    <button type="submit">Save info</button>
                </div>
                <p>please enter your information to see your grade.your Grade go here---{grade}</p>
            </form>
            <Display infos ={enteredInfo} onSaveGrade={saveGradeHandler}></Display>
        </div>
    )
}

export default Practice1;
