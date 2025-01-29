// import "./globals.css";


export default function Home() {
  return (
    <>
 
   
   
   <div className="container m-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 ">
    <div className="grid gap-4">
        <div className="tile bg-teal-500  rounded-md p-6">
          
          <h1 id="city-name" className="tile-marker font-bold ">City Name</h1>
          <p id="chance-rain">Chance of Rain: %</p>
          <p id="degrees">Degrees in Farenheit</p>
          <p className="">Image Goes here! </p>
        </div>
        <div className="tile bg-amber-500 md:col-span-1 rounded-md p-6">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h1 className="tile-marker">Today&#39;s Forecast will go Here!</h1>
          <ul>
            <li>6:00am </li>
            <li>9:00am</li>
            <li>12:00pm </li>
            <li>6:00pm</li>
            <li>9:00pm</li>
          </ul>
        </div>
        <div className="tile bg-yellow-500 rounded-md p-6">
          <h1 className="tile-marker">Air Conditions will go here!</h1>
        </div>
        </div>
        <div className="tile bg-lime-600 sm:col-span-1 md:col-span-1 rounded-md p-6">
          <h1 className="tile-marker">7-Day Forecast goes here!</h1>
        </div>
      
      </div>
   </>
  );
}
