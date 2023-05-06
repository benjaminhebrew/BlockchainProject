import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "./components/styles/Theme.js";
import GlobalStyles from "./components/styles/Global";
import {
	ConnectButton,
	Button
} from "./components/Button.js";
import {
	CTime,
	STime,
	ETime
} from "./components/TimeDisplay.js";
import InputDispose from "./components/InputDispose"
import Cap from "./components/Cap.js";

function App() {

	var total;
	var send;

	return (
		<Router>
			<ThemeProvider theme = {theme}>
				<GlobalStyles />
				<CTime />
				<ConnectButton />
				<div style={{clear: "both", paddingTop: "100px"}} />
				<InputDispose />
				<div style={{clear: "both", paddingTop: "100px"}} />
				<Cap />
				<STime />
				<ETime />
			</ThemeProvider>
		</Router>
	);
}

export default App;
