const Tweet = ({username, name, date, message}) =>{
    return(
        <div>
            <h1>Username: {username}</h1>
            <h1>Name: {name}</h1>
            <h1>Date: {date}</h1>
            <h1>Message: {message}</h1>
        </div>
    )
}