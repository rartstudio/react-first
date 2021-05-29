import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from "./ExpenseAmount";
import React,{ useState } from "react";
import Card from "./Card";

const ExpenseItem = (props) => {
    // one of react hook
    // must be called on react function directly
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('updated');
    };

    return (
        <Card className="shadow">
            <ExpenseDate date={props.date}/>
            <p className="m-0 fs-4">{title}</p>
            <div className="ms-auto">
                <ExpenseAmount amount={props.amount}/>
                <button type="button" className="btn btn-light" onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;