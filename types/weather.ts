export type DayForecast = {
  date: string      
  temp: number      
  icon: string      
}


export type CardProps = {
  city: string                
  currentTemp: number        
  currentIcon: string 
  //! Desactivo esto temporalmente para que sea más fácil debuggear las pruebas 
  //forecast: DayForecast[]     
}