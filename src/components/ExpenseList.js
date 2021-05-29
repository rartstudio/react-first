import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const ExpenseList = (props) => {

    const [selectedFilter, setSelectedFilter] = useState('2021');

    const getExpenseFilterHandler = (filter) => {
        setSelectedFilter(filter);
    }

    const filteredExpense = props.items.filter(expense => expense.date.getFullYear().toString() === selectedFilter);

    let expensesContent = <div className="mt-4 alert alert-warning" role="alert">No expenses found</div>;

    if(filteredExpense.length > 0) {
        expensesContent = filteredExpense.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))
    }

    return (
        <div>
            <ExpenseFilter selected = {selectedFilter} onGetExpenseFilter = {getExpenseFilterHandler}/>
            <ExpenseChart expenses={filteredExpense}/>
            {/* using ternary expression */}
            {/* {
                filteredExpense.length === 0 ? 
                <div className="mt-4 alert alert-warning" role="alert">No expenses found</div> : 
                filteredExpense
                .map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))
            } */}

            {/* using and operator little trick cause and operator will return if first statement true */}
            {/* {
                filteredExpense.length === 0 && <div className="mt-4 alert alert-warning" role="alert">No expenses found</div>} 
            {    
                filteredExpense.length > 0 && filteredExpense.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))
            } */}

            {expensesContent}
        </div>
    );
}

export default ExpenseList;