import { getWeatherData } from "./api.js";
import { resetWearherContent } from "./healper.js";


export const getWeatherByGeolocation = () => {
    //Взято со StackOverflow
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    const success = async (pos) => {
        const crd = pos.coords;

        const response = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&apiKey=1088fdfe9758404f9a4918825d5d44a5&lang=ru`);

        const result = await response.json();
        
        const weather = await getWeatherData(result.features[0].properties.city);

        resetWearherContent(result.features[0].properties.city, weather);
    }

    const error = (err) => {
        console.log(err.code + ' ' + err.message);
    }
navigator.geolocation.getCurrentPosition(success, error, options) // Получение долготы и широты от браузера в котором сидит пользователь
}