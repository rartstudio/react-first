import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()    
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
            </div>
            <div className="col-lg-3"></div>
        </div>
    );
};

export default NewExpense;