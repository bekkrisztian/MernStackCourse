import http from "../http-common";

class RestaurantDataService {
    getAll(page = 0) {
        return http.get(`page=${page}`);
    }

    getId(id) {
        return http.get(`/id/${id}`);
    }

    find(query, by = "name", page = 0) {
        return http.get(`?${by}=${query}&page=${page}`);
    }
}