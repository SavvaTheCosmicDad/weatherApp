import { createHeader } from "./appHeader.js";
import { getWeatherData } from "./api.js";
import { createContent } from "./appContent.js";

const app = async () => {
    const weather = await getWeatherData(JSON.parse(localStorage.getItem('city')) || 'Москва');
    const header = createHeader(weather.name);
    const content = createContent(weather);
    document.body.append(header, content);
}

app();