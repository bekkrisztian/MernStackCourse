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

    const onChangeSearchZip = (e) => {
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
    
    const find = (query, by) => {
        RestaurantDataService.find(query, by)
            .then(response => {
                console.log(response.data);
                setRestaurants(response.data.restaurants);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByName = () => {
        find(searchName, "name");
    };

    const findByZip = () => {
        find(searchZip, "zipcode");
    };

    const findByCuisine = () => {
        if (searchCuisine == "All Cuisines") {
            refreshList();
        } else {
            find(searchCuisine, "cuisine");
        }
    };

    return (
        <div>
            <div className="row pb-1">
                <div className="input-group col-lg-4">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                        value={searchName}
                        onChange={onChangeSearchName}
                    />
                    <div className="input-group-append">
                        <button 
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByName}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="input-group col-lg-4">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Search by zip"
                        value={searchZip}
                        onChange={onChangeSearchZip}
                    />
                    <div className="input-group-append">
                        <button 
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByZip}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantsList;
