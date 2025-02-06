"use client";
import {useState,ChangeEvent, FormEvent} from 'react';

export default function SearchBar({onSearchWeather, onSearchForecast} : {onSearchWeather:any; onSearchForecast:any;} ){

    const[inputValue, setInputValue] = useState("");
    const[error, setError] = useState("");


 const handleChange =(event: ChangeEvent<HTMLInputElement>)=>{
 
    setInputValue(event.target.value);
};


async function onSubmit(event: FormEvent<HTMLFormElement>){

    event.preventDefault(); 
    const apiKey = "f40829018e5975b56c55031ac8a4d703";
    // const formData = new FormData(event.currentTarget);
    // console.log("formData", formData.getAll);
    // console.log("citiname",sea);
    try{
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=imperial&appid=${apiKey}`);
       const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&units=imperial&appid=${apiKey}`);
    // api.openweathermap.org/data/2.5/weather?q=


    const weather = await response.json();
    const forecast = await response2.json(); 
    console.log("DATA2",forecast);
    //pass the data to the prop called onSearch
//if response is 404, then output an error because city name is invalid 
    if(!response.ok){
        setInputValue("");
       throw new Error("Invalid City, Try Again");
     
    }
    else{
        onSearchForecast(forecast)
        onSearchWeather(weather);
        setError("");
        setInputValue("");
        
        
    }
    console.log(weather);  
   
    }catch(e:any){
        setError(e.message || "An error occurred. Please try again.");
    }
   
} 



    return (
<>
       {/** Search Bar */}
       <form onSubmit={onSubmit}className="flex flex-col sm:flex-row container m-auto  w-full gap-2">   
       <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative flex-1 ">
        {/* magnifying glass icon code */}
      <div className="absolute h-[50px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
      </div>
      {/* user input code */}
      <input value={inputValue} onChange={handleChange}type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Cities" required />
      <div>
           
      {error && (
    <span className="text-red-500 text-sm min-h-[1.25rem]">
      {error}
    </span>
  )}
     </div>
     </div>
     
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 sm:w-auto h-[50px] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
   </form>
   </>
    );
};
