import React from 'react'
import './App.css'
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import Practice from './components/Practice'


//App.js is a component that is imported in index.js 
// It is default component  

 function App() {
  // ======Make your components reusable by using props concept that enables you to pass data between two components
  const expenses =[
    {
      id:'e1',
      title:'Toilet paper',
      amount:90,
      date:new Date()
    },
    {
      id:'e2',
      title:'New Tv',
      amount:600,
      date:new Date(2022,3,29),
    },
    {
      id:'e3',
      title:'Car Insurance',
      amount:500,
      date:new Date(2021,3,23),
    }
  ]
  return (
    <div>
      <NewExpense/>
       <Expenses items ={expenses}></Expenses>
       <Practice></Practice>
    </div>
  )
}
export default App;