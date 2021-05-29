import React from "react";

const ExpenseFilter = (props) => {

    const filterChangeHandler = (event) => {
        props.onGetExpenseFilter(event.target.value);
    };

    return (
        <div className="form-control my-4 d-flex">
            <label htmlFor="filterExpense" className="mb-1 d-block">Filter By: </label>
            <select value={props.selected} onChange={filterChangeHandler} className="form-select form-select-sm" id="filterExpense">
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    );
}

export default ExpenseFilter;