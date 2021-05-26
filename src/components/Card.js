const Card = (props) => {
    const classes = 'd-flex flex-row justify-content-start align-items-center my-4 px-3 py-3 rounded '+ props.className;
    return (<div className={classes}>{props.children}</div>);
}

export default Card;