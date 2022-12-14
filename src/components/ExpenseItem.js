// To style this component you have to import the css file as below
import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props){

    // ==========Outputing Dynamic Data and Working with expressions in JSX=========
    // ====.i.e.The code in jsx must not have to hard code html in javascript when you use React===
    // ===Use props topass the data that is passed to the component in App component

    // ===========TO MAKE OUR CODE IN JSX CLEAN LET USE THE JAVASCRIPT LOGIC AND THEN INSERT IT IN JSX======
    // [variable to which you assign the new value ,function used to assign value] = useState(component properties on which you want to perform change)

                   /*==========HOW STATE CONCEPT WORKS IN REACT======
                         Dive in deep :how state concept works in react
                   
                   
                   
                    */
  const [title,setTitle] = useState(props.title)
  const [date ,setDate] = useState(props.date)
  const [amount ,setAmount] =useState(props.amount)

    function clickHandler(){
        //===mylogic start===

          // calculator

        // let choiceOperator = prompt("Enter the operator") 
         
           
        // switch(choiceOperator){
        //     case '+':

        //          break;

        //     case '-':
                 
        //          break;

        //     case '*':
                
        //          break;

        //     case '/':

        //         break;  
                
        //      default:
        //         alert("The operator you enter is not valid ,please enter other")   

        // } 



        //===mylogic end===
          setTitle("Changed_title")
          setDate(new Date())
          setAmount(props.amount + 200)
           console.log(amount)
        
    }
    return(
        <div className='expenseitem_wrapper'>
           <ExpenseDate date={date}></ExpenseDate>
            <div className='title__amount'>
                <h2 className='title'>{title}</h2>
                <div className='amount'>{amount}birr</div>
            </div>
            <button onClick={clickHandler} >Change_the_title</button>
        </div>
        
    )
}

// To import or mean to use it in other components you must make it export as below

export default ExpenseItem;