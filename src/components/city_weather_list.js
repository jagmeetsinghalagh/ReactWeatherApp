import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Sparklines, SparklinesLine } from 'react-sparklines';

class CityWeatherList extends Component {

    renderWeather() {
        return this.props.weather.map( (data) => {
            let cityTemp = data.list.map(cityData => cityData.main.temp);
            let cityPressure = data.list.map(cityData => cityData.main.pressure);
            let cityHumidity = data.list.map(cityData => cityData.main.humidity);

            return (
                <tr key={ data.city.name }>
                    <td>{ data.city.name }</td>
                    <td >
                        <Sparklines data={cityTemp} height={100}>
                            <SparklinesLine color='blue' />
                        </Sparklines>
                    </td>
                    <td >
                    <Sparklines data={cityPressure} height={110}>
                            <SparklinesLine color='red' />
                        </Sparklines>
                    </td>
                    <td>
                    <Sparklines data={cityHumidity} height={110}>
                            <SparklinesLine color='green' />
                        </Sparklines>
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="container" >
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temprature</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        { this.props.weather.length > 0 && 
                            this.renderWeather.bind(this)()
                        }
                    </tbody>
                </table>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps)(CityWeatherList);

