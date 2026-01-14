import { getWeatherByCities } from "@/lib/weather/api";
import Card from "./Card";
import { CardProps } from "@/types/weather";

export default async function Popular() {
  const citiesDataList: CardProps[] = await getWeatherByCities([
    "Madrid",
    "Valencia",
    "Barcelona",
  ]);

  return (
    <>
      <div className="flex-col w-[400] max-[405]:p-2 items-center pt-1 p-4 border border-green">
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
