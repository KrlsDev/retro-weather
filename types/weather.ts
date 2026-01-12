export type DayForecast = {
  date: string      
  temp: number      
  icon: string      
}


export type CardProps = {
  city: string                
  currentTemp: number        
  currentIcon: string  
  forecast: DayForecast[]     
}