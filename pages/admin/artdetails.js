import React from 'react';
import CardArtDetails from "components/Cards/CardArtDetails";
import { useRouter } from 'next/router';

  // components
  // This is the page for View Details of Art interface
   
  // layout for page : contains the admin navbar, sidebar and header componenets 
  import ArtViewDetails from "layouts/ArtViewDetails.js";
    
    
  //  Art Details Page is displayed here 
 
  export default function ArtViewDetailsPage() {
    const router = useRouter();
    const { id } = router.query;
    return (
      <>
    <div>
      <CardArtDetails aid={id} />
    </div>
    </>
    );
  }
  
  ArtViewDetailsPage.layout = ArtViewDetails;