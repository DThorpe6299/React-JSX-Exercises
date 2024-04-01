const App = () =>(
    <div>
        <Tweet username="bunny-rabbit" name="Bugs Bunny" date="03/31/2024" message="What's up Doc?" />
        <Tweet username="duck" name="Daffy Duck" date="03/31/2024" message="Where's Bugs?" />
        <Tweet username="yellow-bird" name="Tweety Bird" date="03/31/2024" message="No sign of Sylvester anywhere." />
    </div>
)
ReactDOM.render(<App/>, document.getElementById("root"));