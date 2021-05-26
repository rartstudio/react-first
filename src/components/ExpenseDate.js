const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US',{month: 'long'});
    const year = props.date.toLocaleString('en-US',{year: 'numeric'});
    const date = props.date.toLocaleString('en-US',{day: 'numeric'});

    return (
        <div className="me-4 border border-2 border-primary px-4 py-2 rounded">
            <div className="fs-6 fw-bold"> {month} </div>
            <div className="fs-5 fw-light"> {year} </div>
            <div className="fs-3"> {date} </div>
        </div>
    );
}

export default ExpenseDate;