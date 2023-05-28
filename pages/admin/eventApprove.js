import React from 'react';
import CardEventApproveTest from "components/Cards/CardEventApproveTest";
import { useRouter } from 'next/router';


// components
// This is the page for updating Art interface
 
// layout for page : contains the admin navbar, sidebar and header componenets 
import ApproveEvent from "layouts/ApproveEvent.js";
  
  
// Add new Art Page is displayed here 

  export default function ArtApprovePage() {
    const router = useRouter();
    const { id } = router.query;
    return (
      <>
    <div>
      <CardEventApproveTest  aid={id}/>
    </div>
      </>
    );
  }



   
  ArtApprovePage.layout = ApproveEvent;