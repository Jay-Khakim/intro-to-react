import { useState } from "react";

function Parent() {
    const colours = ["red", "green", "orange", "yellow", "blue"]
    const [textColor, setColour] = useState("black");
    const [colourIndex, setColourIndex] = useState(0);

    const changeTextColour =()=>{
        const nextColourIndex = (colourIndex + 1 ) % colours.length
        setColourIndex(nextColourIndex)
        setColour(colours[nextColourIndex])
    }
    return(
        <div>
            <h1>Hello from the parent</h1>
            <Child1 callback={changeTextColour}/>
            <Child2 newColour = {textColor}/>
        </div>
    )
}

function Child1(props){
    const handleClick = ()=>{
        props.callback()
    }
    return( 
        <div>
            <button onClick={handleClick}>
                Change the text color
            </button>
        </div>
    )
}
function Child2(props){
    return(
        <div>
            <p style={{color: props.newColour}}>
            This text changes a color
            </p>
        </div>
    )
}

export default Parent