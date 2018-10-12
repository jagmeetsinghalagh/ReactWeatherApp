import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { weatherReducer } from './weather_reducer'; 

const rootReducer = combineReducers({
    weather: weatherReducer,
    form: formReducer
});

export default rootReducer;