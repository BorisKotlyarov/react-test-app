import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import WeatherComponent from "./weather.component";


class CountryComponent extends Component {

    render() {

        const {capital, population, latlng, flag, onGet, weather, index} = this.props;

        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        className="country-flag"
                        image={flag}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Capital: {capital}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            lat: {latlng[0]} <br/>
                            lng: {latlng[1]}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            population: {population}
                        </Typography>

                        <div className="weather-info">
                            {weather && (<WeatherComponent
                                temperature={weather.current.temperature}
                                weather_icons={weather.current.weather_icons}
                                wind_speed={weather.current.wind_speed}
                                precip={weather.current.precip}
                            />)}
                        </div>


                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="default" onClick={() => onGet(capital, index)}>Capital Weather</Button>
                </CardActions>
            </Card>
        )
    }
}

export default CountryComponent;


