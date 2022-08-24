export const getWeatherData = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b24a23131cf2ca1fd362b9a9ec863d4f&lang=ru&units=metric`);

        return await response.json();
    } catch (error) {
        console.log('Error')
    }
}