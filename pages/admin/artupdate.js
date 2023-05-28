import React from 'react';
import CardArtUpdate from "components/Cards/CardArtUpdate";
import { useRouter } from 'next/router';


// components
// This is the page for updating Art interface
 
// layout for page : contains the admin navbar, sidebar and header componenets 
import UpdateArt from "layouts/UpdateArt.js";
  
  
// Add new Art Page is displayed here 

  export default function ArtUpdatePage() {
    const router = useRouter();
    const { id } = router.query;
    return (
      <>
    <div>
      <CardArtUpdate  aid={id}/>
    </div>
      </>
    );
  }



   
  ArtUpdatePage.layout = UpdateArt;