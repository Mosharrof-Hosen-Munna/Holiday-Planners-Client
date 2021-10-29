import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import Navigation from "./Components/Shared/Navigation/Navigation";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import Register from "./Components/Register/Register";
import PrivateRoute, {
  AuthenticationPrivateRoute,
} from "./Components/PrivateRoute/PrivateRoute";
import AddDestination from "./Components/AddDestination/AddDestination";
import BookingTravel from "./Components/BookingTravel/BookingTravel";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <AuthenticationPrivateRoute path="/account/login">
            <Login></Login>
          </AuthenticationPrivateRoute>
          <Route path="/account/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/create/destination">
            <AddDestination></AddDestination>
          </PrivateRoute>
          <PrivateRoute path="/destination/booking/:id">
            <BookingTravel></BookingTravel>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
