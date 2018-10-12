import axios from 'axios';

export const FETCH_WEATHER = 'fetch_weather';
const API_KEY = '7431f9e50f9f99bc341f56a22a48685d';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';

export function fetchWeather(city) {
    const request = axios.get(`${ROOT_URL}${city},IN&appid=${API_KEY}`);

    return {
        type: FETCH_WEATHER,
        payload: request        
    };
}