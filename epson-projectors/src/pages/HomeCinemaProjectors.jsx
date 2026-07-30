import { Link } from "react-router-dom";
import Hero from "../Components/Cinema/Hero";
import Cinema from "../products/cinema/Cinema";


const HomeCinema = () => {
  return (
    <div>

     

      <Hero />

      <div id="cinema">
        <Cinema />
      </div>
      

    </div>
  );
};

export default HomeCinema;