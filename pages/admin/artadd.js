import React from 'react';
import CardArtPostAdd from "components/Cards/CardArtPostAdd";


// components
// This is the page for Adding new Art interface
 
// layout for page : contains the admin navbar, sidebar and header componenets 
import ArtAdd from "layouts/AddArt.js";
  
  
// Add new Art Page is displayed here 

  export default function ArtAddPage() {
    return (
      <>
    <div>
      <CardArtPostAdd />
    </div>
      </>
    );
  }

ArtAddPage.layout = ArtAdd;