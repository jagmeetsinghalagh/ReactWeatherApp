import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityWeatherList extends Component {

    renderWeather() {
        return this.props.weather.map( (data) => {
            return (
                <tr key={ data.city.name }>
                    <td>{ data.city.name }</td>
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

