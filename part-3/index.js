const App = () =>(
    <div>
        <Person name="D'Andre" age={25} hobbies={["Coding", "Exercise", "Anime"]} />
        <Person name="Jack Sparrow" age={17} hobbies={["Being a pirate", "sword fighting"]} />
        <Person name="Williamson" age={18} hobbies={["not much"]}/>
    </div>
)
ReactDOM.render(<App/>, document.getElementById("root"))