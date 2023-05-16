import { useState, useEffect } from "react";

function App(){
  const [data, setData] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => setData(data))
  }, [])

  console.log(data)

  return(
    <div>
      {data.map(item=>(
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  )
}
export default App;
