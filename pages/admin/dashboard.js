import React from "react";

// components

import CardArtistsVisits from "components/Cards/CardArtistsVisits.js";
import CardEventsVisits from "components/Cards/CardEventsVisits.js";
import CardArtsVisits from "components/Cards/CardArtsVisits.js";
 
// layout for page

import Admin from "layouts/Admin.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
      
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardEventsVisits />
        </div> 
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardArtsVisits />
        </div>  
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardArtistsVisits />
        </div> 

      </div>
 
    </>
  );
}

Dashboard.layout = Admin;
