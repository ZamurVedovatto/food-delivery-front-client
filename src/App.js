import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  useLocation,
  useHistory
} from 'react-router-dom'
import Footer from "./components/Footer";
import CartThankYou from "./components/CartThankYou";
import { Switch } from "react-router";
import CartPage from "./components/CartPage";
import Products from "./components/Products";

function App() {
  return (
		<Router>
			<div className="root">
				<Header />
					<Switch>
						<Route path="/" component={Products} />
						<Route path="/cart" component={CartPage} />
						<Route path="/thankYou" component={CartThankYou} />
					</Switch>
				<Footer />
			</div>
		</Router>
  );
}

export default App;
