 import React from "react";
 import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
 const NewExpense =()=>{

  const saveExpenseHandler  = (enteredExpenseData) =>{
    /*
    enteredExpenseData is the data that is submitted in ExpenseForm and that is
    passed to this using props in ExpenseForm and then passed the data to the custom 
    attributes of the ExpenseForm component which is the custom 
    event handler that  i named onSaveExpenseData
      */
      const expenseData ={
        ...enteredExpenseData,
        id:Math.random().toString(),
      }
      console.log(expenseData)
  }
 
     return(
       <div>
         <h2>Add the new expense</h2>
         {/* 
         
          # Expense form is the child form NewExpense component since 
           you import the ExpenseForm in it.

          #The same as above the NewExpense is the child for the App component

          =======So ,how you pass the data from child to parent=======



          */}
          <ExpenseForm onSaveExpenseData={saveExpenseHandler}></ExpenseForm>
       </div>
        
     )
 }

 export default NewExpense;