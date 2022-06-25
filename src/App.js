import './App.css';
import popularDestinations from './data/popularDestinations'
import DestinationCard from './components/destinationCards';
function App() {
    
  return (
    <div className="App">
       <div className="bg-gray-200 grid lg:grid-cols-2  2xl:grid-cols-5">
           <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 
             lg:max-w-full xl:mr-0 2xl:col-span-2">
                  <div className="xl:max-w-xl">
                      <img className="h-10" src="../img/logo.svg" alt="Workcation" />
                      <img className="mt-6 rounded-lg  shadow-xl sm:mt-8 sm:h-256 sm:w-full 
                     sm:object-cover lg:hidden"
                          src="../img/beach-work.jpg" alt="Woman workcationing on the beach sea View" />
                      <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-4 sm:text-3xl 
                    lg:text-3xl xl:text-4xl">
                          You can work from anywhere.
                          <br className="hidden lg:inline" />
                          <span className="text-indigo-500">Take advantage of it.</span>
                      </h1>
                      <p className="mt-3 text-gray-600 sm:mt-4 sm:text-xl">
                          Workcation helps find work-friendly retails in beautiful location so
                          you can enjoy nice weather even when you are not on vacation.
                      </p>

                      <div className="mt-5 space-x-3 sm:mt-6">
                          <a className="btn btn-primary" href="#">Book Your Scoope</a>
                          <a className="btn btn-secondary" href="#">Learn More</a>
                      </div>
                  </div>
              </div>

              <div className="hidden relative lg:block 2xl:col-span-3">
                  <img className="inset-0 sm:w-full h-full" src="../img/beach-work.jpg" alt="Woman workcationing on the beach sea View" />

              </div>
          </div>
          <div className="bg-gray-300 max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
              <h1 className="text-xl text-black-900 "> Popular Destinations</h1>
              <p className="mt-2 text-gray-600">A selection of great work-friendly cities
                  and with lots to see and explore.</p>
              <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">

                  {popularDestinations.map((destination) => (
                      <DestinationCard destination={destination} key={destination.city} />
              ))}

                 
              </div>
          </div>
    </div>
  );
}

export default App;
