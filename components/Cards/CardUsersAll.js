import React, { useState, useEffect } from "react";
import { FaCheck, FaClock } from "react-icons/fa";
import Link from "next/link";
import { gql, useQuery , useMutation } from "@apollo/client";

 
// import axios from 'axios';

// where: { is_approved: true }

// components
const GET_USERS = gql`
  query getUsers   {
    users {
      id
      title
      address
      city
      created_at
      is_approved  
    }
  }
`;

export default function CardUsersAll() {
  const { loading, error, data } = useQuery(GET_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data && data.events) {
      setUsers(data.events);
    }
  }, [data]);

//delete
  const deleteUser = gql`
  mutation DeleteUser($id: uuid!) {
    delete_users_by_pk(id: $id) {
      id
    }
  }
`;

const [deleteUsers] = useMutation(deleteUser);

const handleDelete = async (id) => {
  try {
    const { data } = await deleteUsers({
      variables: {
        id: id,
      },
    });

    console.log(data);

    window.location.reload();
  } catch (error) {
    console.error(error);
  }
};

  return (
   
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
               </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
               
            </div>
          </div>
        </div>

        {/* Div contains Most recent Arts table */}
        <div className="block w-full overflow-x-auto">

          {/* Arts table */}
          <table className="items-center w-full bg-transparent border-collapse">
              {/* Header Recent Arts table */}
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  User Name
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Email 
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Country
                  </th> 
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  City
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Birth Date
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Action
                  </th>
                </tr>
              </thead>

             {/* Content Recent Arts table */}
           <tbody>
           {
             loading ? (<div>Loading ....</div>) :
             users.map((user,idx) => (
              <tr key={idx}>
               <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                 {user.title}
               </th>
               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 {user.address}
               </td>
               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 {user.city}
               </td>
               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 { user.birth_date.substring(0, 10)}
               </td>

               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <Link href={{ pathname: '/admin/artdetails', query: { id: art.id } }}>
                  <a className="bg-blueGray-700  text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                      View Details
                    </a>
                  </Link>
                </td>

                <td  className="text-center">
                  <Link href={{ pathname: '/admin/artupdate', query: { id: art.id } }}>
                    <a className="bg-purple-500  text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Reject 
                  </a>

                  </Link> 

                  
                  <button   className="bg-red-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"         
                            onClick={() => handleDelete(art.id)}>
                    Approve
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

