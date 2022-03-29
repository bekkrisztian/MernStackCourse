import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from "./components/add-review";
import Restaurants from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";

function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/restaurants" className="navbar-brand">
                    Restaurants Review
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/restaurants" className="nav-link">
                            Restaurants
                        </Link>
                    </li>
                    <li className="nav-item">
                        {/* <a onClick={logout} className="nav-link" style={{cursor: "pointer"}}>

                        </a> */}
                    </li>
                </div>
            </nav>
        </div>
    );
}

export default App;
