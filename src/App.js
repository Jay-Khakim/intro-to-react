import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
	return (
		<div>
			<div>Hello world!</div>
			<CustomInput placeholder = {"name"} type={"text"}  />
			<CustomInput placeholder = {"job title"} type={"text"}  />
			<CustomInput placeholder = {"age"} type={"number"}  />
			{/* <CustomInput data={"I am the another data"} /> */}
		</div>
	);
}

function CustomInput(props) {
	const [value, setValue] = useState("");
	const handleChange = event => {
		setValue(event.target.value);
	};
	return (
		<div>
			<input type={props.type} value={value} onChange={handleChange} placeholder={props.placeholder}/>
			<p>{props.data}</p>
		</div>
	);
}

export default App;
