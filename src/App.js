import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  useLocation,
  useHistory
} from 'react-router-dom'

function App() {
  return (
		<Router>
			<div className="root">
				<Header />
			</div>
		</Router>
  );
}

export default App;
