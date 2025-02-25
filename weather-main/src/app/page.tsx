// import "./globals.css";
"use client";
import { ImMeter } from "react-icons/im";
import { FaEye } from "react-icons/fa";
import { LuSunrise, LuSunset } from "react-icons/lu";
import { useState, useEffect} from 'react';
import { useQuery } from '@tanstack/react-query';
import SearchBar from "../../components/SearchBar";
import React from 'react';



// Define the shape of the weather data; interface is used because typescript cannot read null values 
interface ForecastData{
  name: string;
  visibility: number;
  timezone:number;
  dt: number;
  main:{ temp:number;humidity: number;
    pressure: number;
    
  }
  sys:{

sunrise: number; //convert this epoch time to date
sunset: number;
  }
  weather:{main:string;
    icon:string;
  }[];
    wind:{speed:number;}
  
  };
interface WeatherData {

  list: {
    dt: number; 
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
const formatDate = (epochDate :number)=>{
  const date = new Date(epochDate * 1000);
  return date.toLocaleDateString("en-US",{
    weekday: "short", 
    month: "short", 
    day: "numeric",
  
  });
}
const grabEpochTime = (epochDate : number) =>{
  const date = new Date(epochDate *1000);
  return date.toLocaleTimeString("en-US",{
    hour: "2-digit", 
    minute:"2-digit",
    timeZone: "GMT"
  });
}

const convertEpochtoUTC = (epoch: number, timezone: number) =>{
 
  return new Date((epoch + timezone)* 1000).toLocaleTimeString("en-US", {
    hour: "2-digit", 
    minute:"2-digit",
    timeZone: "UTC"
  });


}
const metersToKM = (num: number)=>{
  return num * 0.001;
}
//current day
const convertEpochtoDay = (epoch:number, timezone: number) =>{
 const date = new Date((epoch +timezone) * 1000);

return  date.toLocaleDateString("en-US", {
  month: "short",
  weekday: "long", 
  day: "numeric",
  timeZone: "UTC"

}
);


}




  

export default function Home() {  
 
  const apiKey = "f40829018e5975b56c55031ac8a4d703";
  const[inputValue, setInputValue] = useState("");
  const[city, setCity] = useState("Los Angeles");
  const[error, setError] = useState("");


function handleChange(event: React.ChangeEvent<HTMLInputElement>){

  setInputValue(event.target.value);
};

function onSubmit(e: React.FormEvent<HTMLFormElement>){
  e.preventDefault(); 
  //if inputValue is invalid say error occured
  if(inputValue.length <= 1){
      setError("Invalid City Name. Try Again");
      setInputValue("");
  }else{
    //else it exists and save it as the city and clear out user input on the searchbar
    setCity(inputValue);
    setError(""); //reset error
    setInputValue("");
  }



}

  //fetch data function 

async function fetchData(){
    try{
  const response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`);
  const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`);

    const weather = await response1.json();
   console.log(weather);
    const forecast = await response2.json();
    console.log("fore", forecast);

//if response fails then ask user to input value again
      if(!response1.ok){
        setInputValue("");
       throw new Error("Invalid City, Try Again");
       
   
}

  
    return {weather, forecast};


    }catch(e:any){

        setError(e.message || "An error occurred. Please try again.");
    }


}

const { data, isLoading, refetch} = useQuery({
    queryKey: ["data", city], // Correct way to define query keys
    queryFn: fetchData, // Function to fetch data
    enabled: !!city, // Only fetch when city is set (after submit)
  
});
//refetch query when city name has been changed 
useEffect(() => {
  refetch();
}, [city, refetch]);
  //------------------------------------------------------------------------

  

  // };

  return (
    <>
    
 
         <SearchBar value={inputValue}
                onSubmit={onSubmit}
                onChange={handleChange}
                error = {error}/>
   
 
{isLoading &&  <div className="flex items-center min-h-screen justify-center">
        <p className="animate-bounce">Loading...</p>
      </div>}
  
 {data && (
   
   <div className="container m-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-4">
 
    <div className="grid gap-4">
      {/* City Name container - 1st grid */}
   
    

         <>
         {/* this is where the top-left grid 1 side begins  */}
        <div className="grid grid-cols-2 dark:bg-gray-600 rounded-md p-6">
        <div className="dark:bg-gray-600 rounded-md p-6">
          <h1 className="font-bold">{convertEpochtoDay(data.weather.dt, data.weather.timezone)}</h1>
          <h1 id="city-name" className="font-bold ">{data.weather.name}</h1>
          <h2 id="degrees">{Math.floor(data.weather.main.temp)} °F  {data.weather.weather[0].main}</h2>
          <p id="humidity">Humidity: {data.weather.main.humidity} %</p>
          <p>Wind: {Math.floor(data.weather.wind.speed)} MPH</p>
         
      </div>
         <div className="dark:bg-gray-600  sm:col-span-1  p-4">
            <img src={`https://openweathermap.org/img/wn/${data.weather.weather[0].icon}@2x.png`}/>
          </div>
        </div>
         {/* Air Conditions container  - 3rd Grid*/}
         <div className="grid grid-cols-4 dark:bg-gray-600  p-10 rounded-md">
          <div className="gap-2 items-center text-xs font-semibold mt-4 ">
          <p className="whitespace-nowrap">Air Pressure</p>
          <div className="icon"><ImMeter size={48} /></div>
          <p>{data.weather.main.pressure} hPa</p>
    </div>
    <div className="gap-2 items-center text-xs font-semibold mt-4 ">
          <p className="whitespace-nowrap">Visibility</p>
          <div className="icon"><FaEye size={48}/></div>
          <p>{metersToKM(data.weather.visibility)} km</p>
    </div>
    <div className="gap-2 items-center text-xs font-semibold mt-4 ">
          <p className="whitespace-nowrap">Sunrise</p>
          <div className="icon"><LuSunrise size={48}/></div>
          <p>{convertEpochtoUTC(data.weather.sys.sunrise, data.weather.timezone) }</p>
    </div>
    <div className="gap-2 items-center text-xs font-semibold mt-4 ">
          <p className="whitespace-nowrap">Sunset</p>
          <div className="icon"><LuSunset size={48}/></div>
          <p>{convertEpochtoUTC(data.weather.sys.sunset, data.weather.timezone)}</p>
    </div>
        </div> 
        
      
        </>
       


        </div>
        
      
        {/* 5-day forecast goes here  - 4th Grid to the*/}

      
        <div className="tile dark:bg-gray-600  sm:col-span-1 md:col-span-1 rounded-md p-6">
          <h1 className="tile-marker">5-Day Forecast</h1>
{/* beginning of 7 day forecast list items */}
    <ul role="list" className="divide-y divide-gray-100 ">
     
     
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold">{formatDate(data.forecast.list[3].dt)}</p>
        <p className="text-sm/6 font-semibold">{grabEpochTime(data.forecast.list[3].dt)}</p>
      </div>
      
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
    <img className="text-sm/6 font-semibold "src={`https://openweathermap.org/img/wn/${data.forecast.list[3].weather[0].icon}@2x.png`}/>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
      <p className="text-sm/6 font-semibold ">{data.forecast.list[3].weather[0].main}</p>
      </div>
    </div>
    <div className=" sm:flex sm:flex-col sm:items-end">
    <p className="text-sm/6 font-semibold ">{Math.floor(data.forecast.list[3].main.temp)} °F </p>
  </div>
  
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className=" text-sm/6 font-semibold">{formatDate(data.forecast.list[11].dt)}</p>
        <p className=" text-sm/6 font-semibold">{grabEpochTime(data.forecast.list[11].dt)}</p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <img className="object-scale-down "src={`https://openweathermap.org/img/wn/${data.forecast.list[11].weather[0].icon}@2x.png`} />
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
      <p className="text-sm/6 font-semibold ">{data.forecast.list[11].weather[0].main}</p>
      </div>
    </div>
    <div className=" sm:flex sm:flex-col sm:items-end">
    <p className="text-sm/6 font-semibold ">{Math.floor(data.forecast.list[11].main.temp)} °F </p>
  </div>
  
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">{formatDate(data.forecast.list[19].dt)}</p>
        <p className="text-sm/6 font-semibold ">{grabEpochTime(data.forecast.list[19].dt)}</p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
      <img className=" "src={`https://openweathermap.org/img/wn/${data.forecast.list[19].weather[0].icon}@2x.png`} />
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
      <p className="text-sm/6 font-semibold ">{data.forecast.list[19].weather[0].main}</p>
      </div>
    </div>
    <div className=" sm:flex sm:flex-col sm:items-end">
    <p className="text-sm/6 font-semibold ">{Math.floor(data.forecast.list[19].main.temp)} °F </p>
  </div>
  
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">{formatDate(data.forecast.list[27].dt)}</p>
        <p className="text-sm/6 font-semibold ">{grabEpochTime(data.forecast.list[27].dt)}</p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
      <img className=" "src={`https://openweathermap.org/img/wn/${data.forecast.list[27].weather[0].icon}@2x.png`} />
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
      <p className="text-sm/6 font-semibold ">{data.forecast.list[27].weather[0].main}</p>
      </div>
    </div>
    <div className=" sm:flex sm:flex-col sm:items-end">
    <p className="text-sm/6 font-semibold ">{Math.floor(data.forecast.list[27].main.temp)} °F </p>
  </div>
  
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold ">{formatDate(data.forecast.list[35].dt)}</p>
        <p className="text-sm/6 font-semibold ">{grabEpochTime(data.forecast.list[35].dt)}</p>
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
      <img className=" "src={`https://openweathermap.org/img/wn/${data.forecast.list[35].weather[0].icon}@2x.png`} />
      </div>
    </div>
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
      <p className="text-sm/6 font-semibold ">{data.forecast.list[35].weather[0].main}</p>
      </div>
    </div>
    <div className=" sm:flex sm:flex-col sm:items-end">
    <p className="text-sm/6 font-semibold ">{Math.floor(data.forecast.list[35].main.temp)} °F </p>
  </div>
  
  </li>



     
  
</ul>

  </div> 
        
      
      </div>
      )}
   </>
  );
  
}
