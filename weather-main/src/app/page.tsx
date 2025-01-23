// import "./globals.css";


export default function Home() {
  return (
    <>
 
      <h1>Welcome to My Next.js App</h1>
      <p>This is the homepage of your application built with the App Router.</p>
   
   <div className="container  m-auto grid grid-cols-3 gap-4">
        <div className="tile bg-teal-500">
          <h1 className="tile-marker">ONE</h1>
        </div>
        <div className="tile bg-amber-500">
          <h1 className="tile-marker">TWO</h1>
        </div>
        <div className="tile bg-yellow-500">
          <h1 className="tile-marker">THREE</h1>
        </div>
        <div className="tile bg-lime-600">
          <h1 className="tile-marker">FOUR</h1>
        </div>
        <div className="tile bg-green-600">
          <h1 className="tile-marker">FIVE</h1>
        </div>
        <div className="tile bg-emerald-500">
          <h1 className="tile-marker">SIX</h1>
        </div>
        <div className="tile bg-teal-500">
          <h1 className="tile-marker">SEVEN</h1>
        </div>
        <div className="tile bg-purple-500">
          <h1 className="tile-marker">EIGHT</h1>
        </div>
        <div className="tile bg-pink-500">
          <h1 className="tile-marker">NINE</h1>
        </div>
      </div>
   </>
  );
}
