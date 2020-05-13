import axios from "axios";
import config from "../../config";


const http = axios.create({
    baseURL: config.weatherstack.api.url
});

http.interceptors.response.use((response) => response.data);

class WeatherService {
    static getCurrent(query) {
        return http.get(`/current`, {params: {access_key: config.weatherstack.api.key, query}});
    }
}

export default WeatherService;