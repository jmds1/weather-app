// import "./globals.css";


export default function Home() {
  return (
    <>
 
   
   
   <div className="container m-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 ">
    <div className="grid gap-4">
      {/* City Name container - 1st grid */}
        <div className="tile grid md:grid-cols-2 dark:bg-gray-600  rounded-md p-6">
        <div className="tile dark:bg-gray-600 rounded-md p-6">
          <h1 id="city-name" className="tile-marker font-bold ">City Name</h1>
          <p id="chance-rain">Chance of Rain: %</p>
          <p id="degrees">Degrees in Farenheit</p>
          </div>
          <div className="tile dark:bg-gray-600  sm:col-span-1 md:col-span-1 p-4">
           <p>⛅ Image will go here!🌞</p>
          </div>
          
        </div>
        {/* Today's Forecast container -2nd grid */}
        <div className="tile dark:bg-gray-600  rounded-md p-4">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h2 className="tile-marker pb-2">Today&#39;s Forecast</h2>
          {/* <div className="grid grid-cols-3 divide-x-3 divide-dashed divide-indigo-500"> */}
            <ul className="grid grid-cols-5 divide-x-3 divide-solid ">
            <li className="pl-2 flex flex-col items-center justify-center">
              <p id="time">6:00 AM</p>
              <h1 id="w-icon">☀️</h1>
              <h1 id="w-degree"> 35°F</h1>
            </li>
            <li className="pl-2 flex flex-col items-center justify-center"> <p id="time">9:00 AM</p>
            <h1 id="w-icon">☀️</h1>
            <h1 id="w-degree">50°F</h1>
            </li>
            <li className="pl-2 flex flex-col items-center justify-center"> <p id="time">12:00 PM</p>
            <h1 id="w-icon">☀️</h1>
            <h1 id="w-degree">80°F</h1> </li>
            <li className="pl-2 flex flex-col items-center justify-center"> <p id="time">3:00 PM</p>
            <h1 id="w-icon">☀️</h1>
              <h1 id="w-degree">80°F</h1>
            </li>
            <li className="pl-2 flex flex-col items-center justify-center"> <p id="time">6:00 PM</p>
            <h1 id="w-icon">☀️</h1>
              <h1 id="w-degree">50°F</h1>
            </li>
          </ul>
          {/* </div> */}
         
        </div>
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
