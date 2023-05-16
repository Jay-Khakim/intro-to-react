import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
	return (
		<div>
			<div>Hello world!</div>
			<CustomInput />
			<CustomInput />
		</div>
	);
}

function CustomInput() {
	const [value, setValue] = useState("");
	const handleChange = event => {
		setValue(event.target.value);
	};
	return <input type="text" value={value} onChange={handleChange} />;
}

export default App;
