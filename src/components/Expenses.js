import React from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
 function Expenses(props) {
  return (
    <div>
    <ExpenseItem 
      title={props.items[0].title} 
      amount={props.items[0].amount} 
      date={props.items[0].date}></ExpenseItem>

<ExpenseItem 
      title={props.items[1].title} 
      amount={props.items[1].amount} 
      date={props.items[1].date}></ExpenseItem>

<ExpenseItem 
      title={props.items[2].title} 
      amount={props.items[2].amount} 
      date={props.items[2].date}></ExpenseItem>
    </div>
    
  )
}

export default Expenses;