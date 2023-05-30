function Employee (props){
    return (
        <>
            <h3>Employee {props.name}</h3>
            <p>{props.role ? props.role : "no role"}</p>
        </>
    );
}

export default Employee;