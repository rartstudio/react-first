import React, {useState} from "react";

const ExpenseForm = (props) => {
    //using one state 
    // const [userInput, setUserInput] = useState({enteredTitle : '', enteredAmount: '', enteredDate: ''});
    // const titleChangeHandler = (event) => {
    //     setUserInput((userInput)=>{
    //         return {...userInput,
    //         enteredTitle : event.target.value}
    //     })
    // }
    // const amountChangeHandler = (event) => {
    //     setUserInput((userInput)=>{
    //         return {...userInput,
    //         enteredAmount : event.target.value}
    //     })
    // }
    // const dateChangeHandler = (event) => {
    //     setUserInput((userInput)=>{
    //         return {...userInput,
    //         enteredDate : event.target.value}
    //     })
    // }
    
    //using multiple state each of we need to maintain
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    const setDefaultValueForm = () => {
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date (enteredDate)
        }

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setDefaultValueForm();
    };

    const formVisibleHandler = () => {
        setDefaultValueForm();
        props.onFormDisplayHandler(false);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="mb-3 text-start">
                <label htmlFor="titleExp" className="form-label">Title</label>
                <input id="titleExp" value={enteredTitle} onChange={titleChangeHandler} type="text" className="form-control"/>
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="amountExp" className="form-label align-left">Amount</label>
                <input id="amountExp" value={enteredAmount} onChange={amountChangeHandler} type="number" className="form-control" min="0.01" step="0.01"/>
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="dateExp" className="form-label">Date</label>
                <input id="dateExp" value={enteredDate} onChange={dateChangeHandler} type="date" className="form-control" min="2019-01-01" max="2022-12-31"/>
            </div>
            <button type="button" className="btn btn-light me-4" onClick={formVisibleHandler}>Cancel</button>
            <button type="submit" className="btn btn-primary">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;