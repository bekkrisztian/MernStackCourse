import axios from "axios";

export default axios.create({
    baseUrl: 'http://localhost:5000/restaurants',
    headers: {
        "Content-Type": "application/json",
    }
});