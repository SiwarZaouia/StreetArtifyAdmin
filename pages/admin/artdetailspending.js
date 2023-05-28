import React from 'react';
import CardArtDetailsPending from "components/Cards/CardArtDetailsPending.js";
import { useRouter } from 'next/router';

  // components
  // This is the page for View Details of Art interface
   
  // layout for page : contains the admin navbar, sidebar and header componenets 
  import ArtViewDetails from "layouts/ArtViewDetails.js";
    
    
  //  Art Details Page is displayed here 
 
  export default function ArtViewDetailsPendingPage() {
    const router = useRouter();
    const { id } = router.query;
    return (
      <>
    <div>
      <CardArtDetailsPending aid={id} />
    </div>
    </>
    );
  }
  
  ArtViewDetailsPendingPage.layout = ArtViewDetails;