// import "./globals.css";


export default function Home() {
  return (
    <>
 
   
   
   <div className="container m-auto grid sm:grid-cols-1 md:grid-cols-2 md:grid-row-3  gap-4 ">
        <div className="tile bg-teal-500 row-start-1 rounded-md p-6">
          <h1 className="tile-marker font-bold ">City Name</h1>
          <p>Chance of Rain: %</p>
          <p>Degrees in Farenheit</p>
          <p className="">Image Goes here! </p>
        </div>
        <div className="tile bg-amber-500 row-start-2 rounded-md p-6">
          <h1 className="tile-marker">Today's Forecast will go Here!</h1>
          <ul>
            <li>6:00am </li>
            <li>9:00am</li>
            <li>12:00pm </li>
            <li>6:00pm</li>
            <li>9:00pm</li>
          </ul>
        </div>
        <div className="tile bg-yellow-500 row-start-3 rounded-md p-6">
          <h1 className="tile-marker">Air Conditions will go here!</h1>
        </div>
        <div className="tile bg-lime-600 col-start-2 row-span-3 rounded-md p-6">
          <h1 className="tile-marker">7-Day Forecast goes here!</h1>
        </div>
      
      </div>
   </>
  );
}
