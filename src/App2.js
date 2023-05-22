import {useState} from 'react'

function App(){
    const [items, setItems] = useState([])
    const onAddItem = (item) => {
        setItems([...items, item])
    }

    const removeItem = (index) =>{
        const newItems = [...items]
        newItems.splice(index, 1)
        setItems(newItems)
    }

    return(
        <div>
            <Header onAddItem={onAddItem}/>
            <List items={items} removeItem={removeItem} />

        </div>
    )

    // function MyForm() {
    //     return (
    //       <form>
    //         <label>Enter your name:
    //           <input type="text" />
    //         </label>
    //       </form>
    //     )
    //   }
    //   const root = ReactDOM.createRoot(document.getElementById('root'));
    //   root.render(<MyForm />);

}




function Header(props){
    const [itemText, setItemText] = useState('')
    const handleChange = (event) =>{
        setItemText(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        props.onAddItem(itemText)
        setItemText('')
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type='text'
                placeholder='Enter Item'
                value={itemText}
                onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}


function List(props){
    const handleRemoveItem = (index)=>{
        props.removeItem(index)
    }
    return(
        <div>
            <ul>
                {props.items.map((item, index)=>(
                    <li key={index}>
                        {item}
                        <button onClick={(index)=>handleRemoveItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App