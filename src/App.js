import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import Practice1 from './practice_what_I_have_learned/Practice1';

// below is the initial expense i am work with

const initialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  // for updating the initial expenses we have
  const [expenses,setExpenses] =useState(initialExpenses)


  const addExpenseHandler = expense => {
    setExpenses((prevExpense)=>{
      return [expense ,...prevExpense]
    })
    // or using as below
    /*
    setExpense([expense ,...expenses])
    
    
    */
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
     <Practice1></Practice1>
    </div>
  );
}

export default App;
