import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [formVisible, setFormVisible] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()    
        };
        props.onAddExpense(expenseData);
    };

    const buttonFormHandler = () => {
        setFormVisible(true);
    }

    const formDisplayHandler = (status) => {
        setFormVisible(status);
    }

    return (
        <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
                {
                    formVisible ? 
                    <ExpenseForm onFormDisplayHandler={formDisplayHandler} onSaveExpenseData={saveExpenseDataHandler} /> :
                    <button className="btn btn-success mt-4" onClick={buttonFormHandler}>Add Expense</button>
                }
            </div>
            <div className="col-lg-3"></div>
        </div>
    );
};

export default NewExpense;