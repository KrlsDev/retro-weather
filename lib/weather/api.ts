import { CardProps } from "@/types/weather";

const API_KEY = process.env.OPENWEATHER_API_KEY;

export async function getWeatherByCities(
  cities: string[]
): Promise<CardProps[]> {
  

  const citiesDataList: CardProps[] = [];

  for (const city of cities) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},ES&appid=${API_KEY}&units=metric`
    );
    const temperature = await response.json();
    citiesDataList.push({ city: city, currentTemp: temperature.main.temp, currentIcon: temperature.weather[0].icon});
  }

  return citiesDataList;
}
