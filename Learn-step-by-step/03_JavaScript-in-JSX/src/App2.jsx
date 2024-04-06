//JSX is a special way of writing JavaScript. 
//That means it’s possible to use JavaScript inside it—with curly braces { }. 
//The example below first declares a name for the scientist, name, then embeds it with curly braces inside the <h1>:

export default function App2(){
    let name="Mahiboob"
    return (
        <h1> {name} , Welcome to my my Page</h1>
    )
}

//Any JavaScript expression will work between curly braces, including function calls like formatDate()