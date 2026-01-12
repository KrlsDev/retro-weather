import { getWeatherByCities } from "@/lib/weather/api";
import Card from "./Card";
import { CardProps } from "@/types/weather";

export default async function Safe() {
  const citiesDataList: CardProps[] = await getWeatherByCities([
    "Albacete",
    "Pamplona",
    "Málaga",
  ]);

  return (
    <>
      <div className="flex-col items-center  w-1/3 pt-1 p-4 border border-green">
        <svg
          className="w-full p-1"
          width="162"
          height="36"
          viewBox="0 0 170 36"
        >
          <use href="/sprite.svg#svg-populares"></use>
        </svg>

        {citiesDataList.map((city) => (
          <Card
            city={city.city}
            currentTemp={city.currentTemp}
            key={city.city}
            currentIcon={city.currentIcon}
            forecast={city.forecast}
          />
        ))}
      </div>
    </>
  );
}
