import React from 'react';
import CardEventAdd from "components/Cards/CardEventAdd";


// components
// This is the page for Adding new Art interface
 
// layout for page : contains the admin navbar, sidebar and header componenets 
import ArtAdd from "layouts/AddArt.js";
  
  
// Add new Art Page is displayed here 

  export default function EventAddPage() {
    return (
      <>
    <div>
      <CardEventAdd />
    </div>
      </>
    );
  }

  EventAddPage.layout = ArtAdd;