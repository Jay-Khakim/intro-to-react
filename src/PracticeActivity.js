function Parent() {
    return(
        <div>
            <h1>Hello from the parent</h1>
            <Child greeting = {"Hello wordl"}/>
        </div>
    )
}

function Child(props){
    return(
        <p>
            {props.greeting}
        </p>
    )
}

export default Parent