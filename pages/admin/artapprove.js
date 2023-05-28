import React from 'react';
import CardArtApprove from "components/Cards/CardArtApprove";
import { useRouter } from 'next/router';


// components
// This is the page for updating Art interface
 
// layout for page : contains the admin navbar, sidebar and header componenets 
import ApproveArt from "layouts/ApproveArt.js";
  
  
// Add new Art Page is displayed here 

  export default function ArtApprovePage() {
    const router = useRouter();
    const { id } = router.query;
    return (
      <>
    <div>
      <CardArtApprove  aid={id}/>
    </div>
      </>
    );
  }



   
  ArtApprovePage.layout = ApproveArt;