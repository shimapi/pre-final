import { useState } from "react";
import "./App.css";

const App = ({ data }) => {
	const [count, setCount] = useState(0);

	return (
		<>
			<pre>HOLA {JSON.stringify(data, null, 2)}</pre>
		</>
	);
};

export default App;
