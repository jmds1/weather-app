// import "./globals.css";
"use client";
import {useState} from 'react';
import SearchBar from "../../components/SearchBar";



///FIX TODAY"S FORECAST 



// Define the shape of the weather data; interface is used because typescript cannot read null values 

interface ForecastData{
name: string;
main:{ temp:number;humidity: number;}
weather:{main:string;
}[];
  wind:{speed:number;}

};
interface WeatherData {list: {main: {temp:number; } } [];};
  

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
   
    
  
        <div className="tile grid md:grid-cols-2 dark:bg-gray-600  rounded-md p-6">
        <div className="tile dark:bg-gray-600 rounded-md p-6">
        {forecastData ? (
        <>
           
          <h1 id="city-name" className="tile-marker font-bold ">{forecastData.name}</h1>
          <h2 id="degrees">{Math.floor(forecastData.main.temp)} °F  {forecastData.weather[0].main}</h2>
          <p id="humidity">Humidity: {forecastData.main.humidity} %</p>
          <p>Wind: {Math.floor(forecastData.wind.speed)} MPH</p>
         
        
          </>
          ):(
            <>
        <h1 id="city-name" className="tile-marker font-bold">City Name</h1>
        <p id="humidity">Humidity %</p>
        <p id="degrees">Temperature</p>
      </>
          )}   </div>
          <div className="tile dark:bg-gray-600  sm:col-span-1 md:col-span-1 p-4">
          
           <p>Image will go here </p>
          </div>
         
        </div>
        {/* Today's Forecast container -2nd grid */}
        {/* <div className="tile dark:bg-gray-600  rounded-md p-4">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          {/* <h2 className="tile-marker pb-2">Today&#39;s Forecast</h2> */}
          {/* <div className="grid grid-cols-3 divide-x-3 divide-dashed divide-indigo-500"> */}
            {/* <ul className="grid grid-cols-5 divide-x-3 divide-solid ">
              {weatherData? (
                <>
                <li className="pl-2 flex flex-col items-center justify-center">
              <p id="time">6AM</p>
              <h1 id="w-icon">☀️</h1>
              <h1 id="w-degree"> {Math.floor(weatherData.list[0].main.temp)}°F</h1>
            </li>
            <li className="pl-2 flex flex-col items-center justify-center"> <p id="time">9:00 AM</p>
            <h1 id="w-icon">☀️</h1>
            <h1 id="w-degree">{Math.floor(weatherData.list[1].main.temp)}°F</h1>
            </li>
            <li className="pl-2 flex flex-col items-center justify-center"> <p id="time">12:00 PM</p>
            <h1 id="w-icon">☀️</h1>
            <h1 id="w-degree">{Math.floor(weatherData.list[2].main.temp)}°F</h1> </li>
            <li className="pl-2 flex flex-col items-center justify-center"> <p id="time">3:00 PM</p>
            <h1 id="w-icon">☀️</h1>
              <h1 id="w-degree">{Math.floor(weatherData.list[3].main.temp)}°F</h1>
            </li>
            <li className="pl-2 flex flex-col items-center justify-center"> <p id="time">6:00 PM</p>
            <h1 id="w-icon">☀️</h1>
              <h1 id="w-degree">{Math.floor(weatherData.list[4].main.temp)}°F</h1>
              </li>
              </>
              ) :(<><p>Loading...</p></>)}
            
            
          </ul> */}
          {/* </div> */}
         
        {/* </div> */} 
        {/* Air Conditions container  - 3rd Grid*/}
        <div className="tile dark:bg-gray-600 rounded-md p-6">
          <h1 className="tile-marker">Air Conditions will go here!</h1>
        </div>
        </div>
      
        {/* 7-day forecast goes here  - 4th Grid to the*/}
        <div className="tile dark:bg-gray-600  sm:col-span-1 md:col-span-1 rounded-md p-6">
          <h1 className="tile-marker">7-Day Forecast goes here!</h1>
{/* beginning of 7 day forecast list items */}
    <ul role="list" className="divide-y divide-gray-100 ">
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold">Today</p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">Sunny</p>
      </div>
    </div>
    <div className=" sm:flex sm:flex-col sm:items-end">
    <p className="text-sm/6 font-semibold ">High/Low</p>
  </div>
  
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">Today</p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">Sunny</p>
      </div>
    </div>
    <div className=" sm:flex sm:flex-col sm:items-end">
    <p className="text-sm/6 font-semibold ">High/Low</p>
  </div>
  
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">Today</p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">Sunny</p>
      </div>
    </div>
    <div className=" sm:flex sm:flex-col sm:items-end">
    <p className="text-sm/6 font-semibold ">High/Low</p>
  </div>
  
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">Today</p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">Sunny</p>
      </div>
    </div>
    <div className=" sm:flex sm:flex-col sm:items-end">
    <p className="text-sm/6 font-semibold ">High/Low</p>
  </div>
  
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">Today</p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">Sunny</p>
      </div>
    </div>
    <div className=" sm:flex sm:flex-col sm:items-end">
    <p className="text-sm/6 font-semibold ">High/Low</p>
  </div>
  
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">Today</p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">Sunny</p>
      </div>
    </div>
    <div className=" sm:flex sm:flex-col sm:items-end">
    <p className="text-sm/6 font-semibold ">High/Low</p>
  </div>
  
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">Today</p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">Sunny</p>
      </div>
    </div>
    <div className=" sm:flex sm:flex-col sm:items-end">
    <p className="text-sm/6 font-semibold ">High/Low</p>
  </div>
  
  </li>
  
</ul>

        </div>
      
      </div>
   </>
  );
}
