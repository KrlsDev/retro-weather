"use server"

import { CardProps } from "@/types/weather";

const API_KEY = process.env.OPENWEATHER_API_KEY;

export async function getWeatherByCities(
  cities: string[]
): Promise<CardProps[]> {
  const citiesDataList: CardProps[] = [];

  for (const city of cities) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${API_KEY}&units=metric`
    );
    const temperature = await response.json();

    const response02 = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=es`
    );
    const foreCast = await response02.json();

    // Agrupar por día y calcular media
    const groupedByDay: any = {};
    
    foreCast.list.forEach((item: any) => {
      const date = item.dt_txt.split(' ')[0];
      
      if (!groupedByDay[date]) {
        groupedByDay[date] = [];
      }
      
      groupedByDay[date].push(item);
    });

    // Crear array de 5 días con temperatura media
    const dailyForecast = Object.entries(groupedByDay)
      .slice(0, 5)
      .map(([date, items]: [string, any]) => {
        const temps = items.map((item: any) => item.main.temp);
        const tempMedia = temps.reduce((a: number, b: number) => a + b, 0) / temps.length;
        const midday = items.find((item: any) => item.dt_txt.includes('12:00:00')) || items[0];
        
        return {
          date: date,
          temp: Math.round(tempMedia * 10) / 10,
          icon: midday.weather[0].icon
        };
      });

    citiesDataList.push({
      city: city,
      currentTemp: temperature.main.temp,
      currentIcon: temperature.weather[0].icon,
      forecast: dailyForecast
    });
  }

  return citiesDataList;
}