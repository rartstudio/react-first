import './App.css';
import ExpenseList from './components/ExpenseList';
import NewExpense from './components/NewExpense';

const App = () => {
  const expenses = [
    {id: 'e1', title: 'car insurance', date: new Date(2021,2,28), amount : 395},
    {id: 'e2', title: 'buy a ciggerete', date: new Date(2021,3,28), amount : 495},
    {id: 'e3', title: 'buy a coffee', date: new Date(2021,4,28), amount : 595},
    {id: 'e4', title: 'buy a home', date: new Date(2021,5,28), amount : 695}
  ];

  const addExpenseHandler = expense => {
    console.log('in app js');
    console.log(expense);
  };
  
  return (
    <div className="App">
      <div className="container">
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
