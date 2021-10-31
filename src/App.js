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
import MyOrders from "./Components/MyOrders/MyOrders";
import ManageOrders from "./Components/ManageOrders/ManageOrders";
import AllDestination from "./Components/AllDestination/AllDestination";
import OrderReview from "./Components/OrderReview/OrderReview";

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
          <AuthenticationPrivateRoute path="/account/register">
            <Register></Register>
          </AuthenticationPrivateRoute>
          <PrivateRoute path="/create/destination">
            <AddDestination></AddDestination>
          </PrivateRoute>
          <PrivateRoute path="/destination/booking/:id">
            <BookingTravel></BookingTravel>
          </PrivateRoute>
          <PrivateRoute path="/myOrders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/booking-order/all">
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute path="/order/review/:id">
            <OrderReview></OrderReview>
          </PrivateRoute>
          <Route path="/destinations/all">
            <AllDestination></AllDestination>
          </Route>
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
