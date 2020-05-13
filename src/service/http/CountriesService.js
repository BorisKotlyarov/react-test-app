import axios from "axios";
import config from "../../config";


const http = axios.create({
    baseURL: config.countries.api.url
});

http.interceptors.response.use((response) => response.data);

class CountriesService {
    static getCountryInfo(name) {
        return http.get(`/${name}`);
    }
}

export default CountriesService;