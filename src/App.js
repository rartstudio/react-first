import React, {useState} from 'react';

import './App.css';
import ExpenseList from './components/ExpenseList';
import NewExpense from './components/NewExpense';
import AlertInfo from './components/AlertInfo';

const DUMMY_EXPENSES = [
  {id: 'e1', title: 'car insurance', date: new Date(2020,2,28), amount : 395},
  {id: 'e2', title: 'buy a ciggerete', date: new Date(2020,3,28), amount : 495},
  {id: 'e3', title: 'buy a coffee', date: new Date(2021,4,28), amount : 595},
  {id: 'e4', title: 'buy a home', date: new Date(2022,5,28), amount : 695}
];

const App = () => {

  const [alertInfo , setAlertInfo] = useState(false);
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      // return [...prevExpenses, expense];
      return [expense, ...prevExpenses];
    });
    setAlertInfo(true);
  };

  const alertInfoHandler = () => {
    setAlertInfo(false);
  }
  
  return (
    <div className="App">
      <div className="container">
        {alertInfo ? <AlertInfo setAlertToFalse={alertInfoHandler}/> : <div></div>}
        <NewExpense onAddExpense={addExpenseHandler}/>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <ExpenseList items={expenses}/>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
