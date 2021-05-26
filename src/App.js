import './App.css';
import ExpenseList from './components/ExpenseList';

const App = () => {
  const expenses = [
    {title: 'car insurance', date: new Date(2021,2,28), amount : 395},
    {title: 'buy a ciggerete', date: new Date(2021,3,28), amount : 495},
    {title: 'buy a coffee', date: new Date(2021,4,28), amount : 595},
    {title: 'buy a home', date: new Date(2021,5,28), amount : 695}
  ];
  return (
    <div className="App">
      <div className="container">
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
