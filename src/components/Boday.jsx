import { useState } from "react";
import ResturentCard from "./ResturentCard";
import Search from "./search";
import { resturent } from "../utils/mockData";
import TopRatedRestorents from "./TopRatedReatorent";

function Boday() {
  const [filteredRestaurants, setFilteredRestaurants] = useState(resturent);

  function handleFilteredRestaurants(filteredData) {
    setFilteredRestaurants(filteredData);
  }

function filterTopRatedResturents(){
    const topRatedRestorents = filteredRestaurants.filter((res) =>res.rating>4
  );
  setFilteredRestaurants(topRatedRestorents);
  }
  
  return (
    <div className="body">
      <h1>Restaurant Online Food Delivery in India</h1>
      {/* Pass all restaurants as a prop */}
      <Search filterFunc={handleFilteredRestaurants} allRestaurants={resturent} />

      <TopRatedRestorents topRatedFunc={filterTopRatedResturents}
      
      />

      <div className="restbox">
        {filteredRestaurants.map((res) => (
          <ResturentCard key={res.id} resDetail={res} />
        ))}
      </div>
    </div>
  );
}

export default Boday;
