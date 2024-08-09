// Importing necessary libraries and components for the App
import "./App.css";
import Testimonial from "./components/Testimonial";
import reviews from './data';

// Main component of the app
function App() {
  return (
   <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
     {/* This is the header of the app */}
    <div className="text-center">
      <h1 className="text-4xl font-bold">
        Our Testimonial
      </h1>
    {/* Including the Testimonials component here */}
      <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
      <Testimonial reviews={reviews}/>
    </div>
   </div>
  );
}

export default App;
