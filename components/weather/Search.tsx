"use client";

import { useState } from "react";
import Card from "./Card";
import { getWeatherByCities } from "@/lib/weather/api";
import { CardProps } from "@/types/weather";

export default function Search() {
  const [input, setInput] = useState("");
  const [searchedCity, setSearchedCity] = useState<CardProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setError(""); // Limpiar error al escribir
  };

  const handleSearch = async () => {
    if (input.length < 3) {
      setError("Escribe al menos 3 letras");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await getWeatherByCities([input]);
      
      if (result.length > 0) {
        setSearchedCity(result[0]);
        setInput(""); // Limpiar input después de buscar
      } else {
        setError("Ciudad no encontrada");
      }
    } catch (err) {
      setError("Error al buscar la ciudad");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex-col items-center w-1/3 pt-1 p-4 border border-green">
      <svg className="w-full p-1" width="162" height="36" viewBox="0 0 135 36">
        <use href="/sprite.svg#svg-buscar"></use>
      </svg>
      <div className="h-10 flex flex-row w-full border border-light-blue mb-4">
        <input
          className="w-full px-2"
          type="text"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={input}
          placeholder="Buscar ciudad..."
        />
        <button 
          onClick={handleSearch} 
          disabled={loading}
          className="px-4 text-black bg-light-blue hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "..." : "Buscar"}
        </button>
      </div>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      {searchedCity && (
        <Card
          city={searchedCity.city}
          currentTemp={searchedCity.currentTemp}
          currentIcon={searchedCity.currentIcon}
          forecast={searchedCity.forecast}
        />
      )}
    </div>
  );
}