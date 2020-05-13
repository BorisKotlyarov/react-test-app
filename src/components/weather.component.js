import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class WeatherComponent extends Component {

    render() {

        const {temperature, weather_icons, wind_speed, precip} = this.props;

        return (
            <Card>
                <CardContent>
                    <Typography>temperature: {temperature}</Typography>
                    <Typography>{weather_icons.map((icon, index) => (<img src={icon} key={index}/>))}</Typography>
                    <Typography>wind speed: {wind_speed}</Typography>
                    <Typography>precip: {precip}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default WeatherComponent;


