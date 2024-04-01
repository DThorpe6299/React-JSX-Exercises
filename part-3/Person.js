const Person = (props) =>{
    let reply;
    if(props.age>18){
        reply = <h3>please go vote!</h3>
    }else{
        reply = <h3>you must be 18</h3>
    }

    let truncatedName = props.name;
    if (props.name.length > 8) {
        truncatedName = props.name.substring(0, 6);
    }
    return(
        <div>
            <p>
                My name is {props.name}
            </p>
            <p>
                <b>System:</b> How old are you?
            </p>
            <p>
                <b>You:</b> I am {props.age} years old.
            </p>
            <p>
                <b>System:</b> {reply}
            </p>
            <p>
                <b>My hobbies include:</b> 
            </p>
            <ul>
                {props.hobbies.map(hobby=><li>{hobby}</li>)}
            </ul>
        </div>
    )
}