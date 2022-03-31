import { useState, useEffect } from "react";
import RestaurantDataService from "../services/restaurant";
import { Link } from "react-router-dom";

const RestaurantsList = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [searchZip, setSerarchZip] = useState("");
    const [searchCuisine, setSearchCuisine] = useState("");
    const [cuisines, setCuisines] = useState(["All Cuisines"]);

    useEffect(() => {
        retriveRestaurants();
        retriveCuisines();
    }, []);

    const retriveRestaurants = () => {
        RestaurantDataService.getAll()
            .then(response => {
                console.log(response.data);
                setRestaurants(response.data.restaurants);
            }).catch(e => {
                console.log(e);
            });
    };

    const retriveCuisines = () => {
        RestaurantDataService.getCuisines()
            .then(response => {
                console.log(response.data);
                setCuisines(["All Cuisines"].concat(response.data));
            }).catch(e => {
                console.log(e);
            });
    };

    const onChangeSearchName = (e) => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    const onChangeSearcZip = (e) => {
        const searchZip = e.target.value;
        setSerarchZip(searchZip);
    };

    const onChangeSearchCuisine = (e) => {
        const searchCuisine = e.target.value;
        setSearchCuisine(searchCuisine);
    };

    const refreshList = () => {
        retriveRestaurants();
    };

    return (
        <div className="App">
            Hello World.
        </div>
    );
}

export default RestaurantsList;
