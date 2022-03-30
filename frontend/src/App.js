import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from "./components/add-review";
import Restaurant from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";

function App() {
    const [user, setUser] = React.useState(null);
    const login = async(user = null) => {
        setUser(user);
    }
    const logout = async() => {
        setUser(null);
    }
    return (
        <div className="App">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/restaurants" className="navbar-brand">
                    Restaurants Reviews
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/restaurants"} className="nav-link">
                            Restaurants
                        </Link>
                    </li>
                    <li className="nav-item">
                        {
                            user ? (
                                <a onClick={logout} className="nav-link" style={{cursor: "pointer"}}>
                                    Logout {user.name}
                                </a>
                            ) : (
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            )
                        }
                    </li>
                </div>
            </nav>
            
            <div className="container mt-3">
                <Routes>
                    <Route exact path="/" element={<RestaurantsList />} />
                    <Route exact path="/restaurants" element={<RestaurantsList />} />
                    <Route
                        path="/restaurants/:id/review"
                        render={(props) => {
                            <AddReview {...props} user={user} />
                        }} 
                    />
                    <Route
                        path="/restaurants/:id"
                        render={(props) => {
                            <Restaurant {...props} user={user} />
                        }} 
                    />
                    <Route
                        path="/login"
                        element={<Login />}
                        render={(props) => {
                            <Login {...props} user={user} />
                        }} 
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
