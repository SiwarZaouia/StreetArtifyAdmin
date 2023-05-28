import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { gql, useQuery } from "@apollo/client";

// components

// get pending arts !!! Last 5 

const GET_ARTS = gql`
  query getArts   {
    street_arts (      
      where: { is_approved: false }  
      order_by: { created_at: desc }
      limit: 5
    ){
      id
      title
      address
      city
      created_at
      is_approved  
    }
  }
`;

export default function CardArtsPending() {
  const { loading, error, data } = useQuery(GET_ARTS);
  const [arts, setArts] = useState([]);

  useEffect(() => {
    if (data && data.street_arts) {
      setArts(data.street_arts);
    }
  }, [data]);

  return (
    
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
              Last 5 Pending Arts (Recent)
              </h3>
            </div>
           
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <Link href="/admin/artpendingall">
                <a>
                <button
                  className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >    
                  View All
                </button>
                </a>
              </Link>

              <Link href="/admin/artadd">
                <a>
                  <button
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Add Art
                  </button>
                </a>
              </Link>
            </div>

          </div>
        </div>

        {/* Div contains Most recent Arts table */}
        <div className="block w-full overflow-x-auto">

          {/* Arts table */}
          <table className="items-center w-full bg-transparent border-collapse">
          
          <thead>
            <tr>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Art Title
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Adress 
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              City
              </th> 
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Date
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Details
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Action
              </th>
            </tr>
          </thead>

          <tbody>
          {
             loading ? (<div>Loading ....</div>) :
             arts.map((art,idx) => (
              <tr key={idx}>
               <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                 {art.title}
               </th>
               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 {art.address}
               </td>
               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 {art.city}
               </td>
               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 { art.created_at.substring(0, 10)}
               </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <Link href={{ pathname: '/admin/artdetails', query: { id: art.id } }}>
                    <a className="bg-purple-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                      View Details
                    </a>
                  </Link>
                </td>
                <td  className="text-center">
                  <Link href={{ pathname: '/admin/artupdate', query: { id: art.id } }}>
                    <a className="bg-purple-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                         Approve
                     </a>
                  </Link>
                  
                  <button   className="bg-red-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"         
                            onClick={() => handleDeleteRow(item.id)}>
                    Reject
                  </button>
                </td>
            </tr>

             
             ))
           }
          </tbody>

          </table>

        </div>

      </div>
    </>
  );
}


