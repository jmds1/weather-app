// import "./globals.css";
"use client";
import { useState} from 'react';
import SearchBar from "../../components/SearchBar";





///FIX TODAY"S FORECAST 



// Define the shape of the weather data; interface is used because typescript cannot read null values 

interface ForecastData{
name: string;
main:{ temp:number;humidity: number;}
weather:{main:string;
  icon:string;
}[];
  wind:{speed:number;}

};
interface WeatherData {

  list: {
    dt_txt: string; 
  main: 
  {
    temp:number; 
    temp_max:number;
    temp_min: number;
   
} 
weather:{
  icon: string;
  main:string;

}[];
} [];
};

//function that formats the date 
const formatDate = (dateString :string)=>{
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US",{
    weekday: "short", 
    month: "short", 
    day: "numeric",
  });
}

  

export default function Home() {  
  // output forecastData as WeatherData Interface or null (initially null)
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  

  

  const getWeatherData = (data:any) =>{
    setWeatherData(data);
  
  };
  const getForecastData = (data:any) =>{
    setForecastData(data);
  
  };

  return (
    <>
    
 
         <SearchBar onSearchWeather ={getForecastData} onSearchForecast= {getWeatherData}/>
   
 

  
 
   
   <div className="container m-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-4">
 
    <div className="grid gap-4">
      {/* City Name container - 1st grid */}
   
    
      {forecastData ? (
         <>
        <div className="tile grid md:grid-cols-2 dark:bg-gray-600  rounded-md p-6">
        <div className="tile dark:bg-gray-600 rounded-md p-6">
      
       
           
          <h1 id="city-name" className="tile-marker font-bold ">{forecastData.name}</h1>
          <h2 id="degrees">{Math.floor(forecastData.main.temp)} °F  {forecastData.weather[0].main}</h2>
          <p id="humidity">Humidity: {forecastData.main.humidity} %</p>
          <p>Wind: {Math.floor(forecastData.wind.speed)} MPH</p>
          <div className="tile dark:bg-gray-600  sm:col-span-1 md:col-span-1 p-4">
        </div>
      </div>
         <div className="tile dark:bg-gray-600  sm:col-span-1 md:col-span-1 p-4">
            <img src={`https://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`}/>
          </div>
        </div>
         <div className="tile dark:bg-gray-600 rounded-md p-6">

          <h1 className="tile-marker">Air Conditions will go here!</h1>
        </div> 
        
        </>
        ):(
          <></>
          )} 
       

        {/* Air Conditions container  - 3rd Grid*/}
        {/* <div className="tile dark:bg-gray-600 rounded-md p-6">

          <h1 className="tile-marker">Air Conditions will go here!</h1>
        </div> */}
        </div>
      
        {/* 5-day forecast goes here  - 4th Grid to the*/}
 {weatherData ? (
        <>
        <div className="tile dark:bg-gray-600  sm:col-span-1 md:col-span-1 rounded-md p-6">
          <h1 className="tile-marker">5-Day Forecast</h1>
{/* beginning of 7 day forecast list items */}
    <ul role="list" className="divide-y divide-gray-100 ">
     
     
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold">{formatDate(weatherData.list[3].dt_txt)}</p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
    <img className="text-sm/6 font-semibold "src={`https://openweathermap.org/img/wn/${weatherData.list[3].weather[0].icon}@2x.png`}/>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
      <p className="text-sm/6 font-semibold ">{weatherData.list[3].weather[0].main}</p>
      </div>
    </div>
    <div className=" sm:flex sm:flex-col sm:items-end">
    <p className="text-sm/6 font-semibold ">{Math.floor(weatherData.list[3].main.temp)} °F </p>
  </div>
  
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className=" text-sm/6 font-semibold">{formatDate(weatherData.list[11].dt_txt)}</p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <img className="object-scale-down "src={`https://openweathermap.org/img/wn/${weatherData.list[11].weather[0].icon}@2x.png`} />
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
      <p className="text-sm/6 font-semibold ">{weatherData.list[11].weather[0].main}</p>
      </div>
    </div>
    <div className=" sm:flex sm:flex-col sm:items-end">
    <p className="text-sm/6 font-semibold ">{Math.floor(weatherData.list[11].main.temp)} °F </p>
  </div>
  
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">{formatDate(weatherData.list[19].dt_txt)}</p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
      <img className=" "src={`https://openweathermap.org/img/wn/${weatherData.list[19].weather[0].icon}@2x.png`} />
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
      <p className="text-sm/6 font-semibold ">{weatherData.list[19].weather[0].main}</p>
      </div>
    </div>
    <div className=" sm:flex sm:flex-col sm:items-end">
    <p className="text-sm/6 font-semibold ">{Math.floor(weatherData.list[19].main.temp)} °F </p>
  </div>
  
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">{formatDate(weatherData.list[27].dt_txt)}</p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
      <img className=" "src={`https://openweathermap.org/img/wn/${weatherData.list[27].weather[0].icon}@2x.png`} />
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
      <p className="text-sm/6 font-semibold ">{weatherData.list[27].weather[0].main}</p>
      </div>
    </div>
    <div className=" sm:flex sm:flex-col sm:items-end">
    <p className="text-sm/6 font-semibold ">{Math.floor(weatherData.list[27].main.temp)} °F </p>
  </div>
  
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">{formatDate(weatherData.list[35].dt_txt)}</p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
      <img className=" "src={`https://openweathermap.org/img/wn/${weatherData.list[35].weather[0].icon}@2x.png`} />
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
      <p className="text-sm/6 font-semibold ">{weatherData.list[35].weather[0].main}</p>
      </div>
    </div>
    <div className=" sm:flex sm:flex-col sm:items-end">
    <p className="text-sm/6 font-semibold ">{Math.floor(weatherData.list[35].main.temp)} °F </p>
  </div>
  
  </li>



     
  
</ul>

  </div>  </>
         ): (<></>)}
      
      </div>
   </>
  );
}
