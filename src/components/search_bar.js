import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    renderField(field) {
        return (
            <input 
                type="text"
                { ...field.input } 
                className="form-control"
                placeholder="Enter city name to search weather for last five days"
            />
            
        );
    }

    onSubmitHandler(values) {
        this.props.fetchWeather(values.city);
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <div >
                <form onSubmit = { handleSubmit( this.onSubmitHandler.bind(this) )} >
                    <div className="input-group mt-3 p-5">
                        <Field
                            name="city"
                            component={ this.renderField }
                        />
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-primary">
                                <i className ="fas fa-search"></i>
                            </button>
                        </span>
                    </div> 
                </form> 
            </div>
        );
    }
}


export default reduxForm({
    form: "search-bar"
})(
    connect(null, { fetchWeather })(SearchBar)
);