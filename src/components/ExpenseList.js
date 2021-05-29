import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseList = (props) => {

    const [selectedFilter, setSelectedFilter] = useState('2021');

    const getExpenseFilterHandler = (filter) => {
        setSelectedFilter(filter);
        console.log(filter);
    }

    return (
        <div>
            <ExpenseFilter selected = {selectedFilter} onGetExpenseFilter = {getExpenseFilterHandler}/>
            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
            <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem>
        </div>
    );
}

export default ExpenseList;