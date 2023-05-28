import React from "react";

// components
// This is the First page for the admin Account : Arts CRUD interfaces
 
import CardArtsApprovedAll from "components/Cards/CardArtsApprovedAll.js";
 
// layout for page : contains the admin navbar, sidebar and header componenets 
import AdminPost from "layouts/AdminArts.js";


// Recent Arts are displayed here 
export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
      
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardArtsApprovedAll />
        </div>  
       
      </div>
 
    </>
  );
}

Dashboard.layout = AdminPost;
