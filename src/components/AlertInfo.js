import React from "react";

const AlertInfo = (props) => {

    const alertClickHandler = () => {
        props.setAlertToFalse(false);
    };

    return (
        <div className="alert alert-primary alert-dismissible fade show" role="alert">
            Success add expense
            <button onClick={alertClickHandler}type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

export default AlertInfo;