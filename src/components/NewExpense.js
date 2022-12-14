 import React from "react";
 import './NewExpense.css'
 import { useState } from "react";
 const NewExpense =()=>{
  // State that handling the change of thre title ,amount and date entered

 const [enteredTitle,setTitleEntered]=useState('')
 const [enteredAmount ,setAmountEntered]=useState('')
 const [enteredDate ,setDateEntered] =useState('')


 // Using one state one at a time rather than using as the above

 // but when you are using multiple state in one state the state depends on the previous state
   //=======Using one state start======
//  const[userInput ,setUserInput] = useState({
//   enteredTitle:'',
//   enteredAmount:'',
//   enterdDate:'',
//  })
 //=====Using one state end

   const titleChangeHandler =(event)=>{

    // when you update title the other two are keeping the same .i.e it depends on each other 
    //Hence ,here you have use nested function rather as below


        // setUserInput({
        //   ...userInput ,
        //   enteredTitle:event.target.value,
        // })


        //THAT IS IT ,AS BELOW

        // setUserInput((prevState)=>{
        //   return {
        //     ...prevState ,enteredTitle:event.target.value
        //   }
        // })
        setTitleEntered(event.target.value)
     


   }

   const amountChangeHandler =(event)=>{
    // setUserInput({
    //   ...userInput ,
    //   enterdAmount:event.target.value,
    // })
      setAmountEntered(event.target.value)
      
    
   }
   const dateChangeHandler =(event)=>{
      //  setUserInput({
      //   ...userInput ,
      //   enteredDate:event.target.value,
      //  })
      setDateEntered(event.target.value)

   }
   const submitHandler =(event)=>{
      event.preventDefault();

      const expenseData ={
        title:enteredTitle,
        amount:enteredAmount,
        date: new Date(enteredDate),
      }
      console.log(expenseData)
      //====Clear what you have entered after submition as below using the value attribute in input type===
      // setTitleEntered('')
      setAmountEntered('')
      setDateEntered('')
   }
     return(
       <div>
         <h2>Add the new expense</h2>
         <form onSubmit={submitHandler} className="form_div">
            <div className="label_input">
                <label for ="title"  >Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="label_input">
                <label for ="amount" >Amount</label>
                <input type="number" value={enteredAmount} onChange={amountChangeHandler}></input>
            </div>
            <div className="label_input">
                <label for ="date" >Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler}></input>
            </div>
              <button type ="submit">Add expense</button>
         </form>
       </div>
        
     )
 }

 export default NewExpense;