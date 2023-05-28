import React from "react";

// components
 
  
// layout for page
import AdminPost from "layouts/AdminArts.js";
 import CardArtsPendingAll from "components/Cards/CardArtsPendingAll.js";


export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
      
         
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardArtsPendingAll/>
        </div>  
        

      </div>
 
    </>
  );
}

Dashboard.layout = AdminPost;
