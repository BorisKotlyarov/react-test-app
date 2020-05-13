import React, {Component} from "react";
import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CountriesService from "../service/http/CountriesService";
import WeatherService from "../service/http/WeatherService";

import CountryComponent from "./country.component";


class InputComponent extends Component {

    state = {
        countrySearch: '',
        countries: [],
    };

    onSubmit = async () => {
        const countries = await CountriesService.getCountryInfo(this.state.countrySearch);
        this.setState({
            countrySearch: '',
            countries
        });
    }

    inputOnChange = (ev) => {
        const countrySearch = ev.currentTarget.value;
        this.setState({countrySearch});
    }

    getWeather = async (capital, index) => {
        const {countries} = this.state;
        const weather = await WeatherService.getCurrent(capital);
        countries[index]['weather'] = weather;
        this.setState({countries});
    }

    render() {

        const {countrySearch} = this.state;

        return (
            <div>
                <div className="input-container">

                    <TextField
                        id="standard-full-width"
                        style={{margin: 8}}
                        placeholder="Enter country"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.inputOnChange.bind(this)}
                        value={countrySearch}
                    />

                    <Button disabled={!countrySearch} onClick={this.onSubmit.bind(this)}
                            color="default">Submit</Button>
                </div>

                <div className="countries-container">
                    {this.state.countries.map((item, index) => (
                        <CountryComponent
                            key={index}
                            flag={item.flag}
                            capital={item.capital}
                            latlng={item.latlng}
                            population={item.population}
                            weather={item.weather}
                            onGet={this.getWeather}
                            index={index}
                        />
                    ))}
                </div>


            </div>
        )
    }
}

export default InputComponent;
