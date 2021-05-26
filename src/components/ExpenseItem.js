import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from "./ExpenseAmount";
import Card from "./Card";

const ExpenseItem = (props) => {

    return (
        <Card className="shadow">
            <ExpenseDate date={props.date}/>
            <p className="m-0 fs-4">{props.title}</p>
            <div className="ms-auto">
                <ExpenseAmount amount={props.amount}/>
            </div>
        </Card>
    );
}

export default ExpenseItem;