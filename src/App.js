import Home from "./components/home/Home.js";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "./components/styles/Theme.js";

function App() {
	return (
		<Router>
			<ThemeProvider theme = {theme}>
				<Home />
			</ThemeProvider>
		</Router>
	);
}

export default App;
