import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { purple, red } from "@material-ui/core/colors";
import Layout from "./components/Layout";

const theme = createMuiTheme({
	palette: {
		secondary: purple,
	},
	typography: {
		fontFamily: "Ubuntu",
		fontSize: 16,
	},
});
function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Layout>
					<Switch>
						<Route exact path="/">
							<Notes />
						</Route>
						<Route path="/create">
							<Create />
						</Route>
					</Switch>
				</Layout>
			</Router>
		</ThemeProvider>
	);
}

export default App;
