import React,{ useState, useEffect } from 'react';
import Link from 'next/link';

import { gql, useQuery } from "@apollo/client";

const GET_ARTS = gql`
query($id:uuid!){
  street_arts_by_pk(id:$id) {
    title
    address
    city
    created_at
    is_approved
    description
    pictures{
      link
    }
    user{
      first_name
      last_name
    }
  }
}
`;

 

const cardartdetails = (props) => {
  const { loading, error, data } = useQuery(GET_ARTS,{
    variables: { id:props.aid },
  });
  const [arts, setArts] = useState([]);

  

  console.log(data)
  useEffect(() => {
    if (data && data.street_arts_by_pk) {
      setArts(data.street_arts_by_pk);
    }
  }, [data]);

    const comments = [
        {
          id: 1,
          name: 'salwa',
          content: 'Great job ',
          Image: 'img/profile.jpg'
        },
        {
          id: 2,
          name: 'ahmad ',
          content: 'I did not like it !',
          Image: 'img/logo.png'
        },
      ];

  return (

    loading ? (<div>Loading ...</div>)
    :(
    
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 items-center lg:w-8/12 mx-auto mt-2 flex-grow">
        
      {/*Art Details Title*/}
      <div className="relative w-full rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex ">
          <h6 className="text-blueGray-700 text-xl font-bold"> Art Details </h6>
        </div>
      </div>

      {/*Art Details Picture Part*/}
      <div className=" bg-white p-2">
        <img src={arts && arts.pictures && arts.pictures[0] && arts.pictures[0].link} alt="Your Image" className="w-full h-full object-cover" />
      </div>

      {/*Art Details Info Part*/}
      <div className="  bg-white p-4 w-full"> 

        <h2 className="text-lg font-bold"> Art Details</h2>
       
        {/*Artist Name + Location */}
        <div  className="flex items-center">
          <img src="/img/arts/art_1.png" className="w-12 h-12  rounded-full"></img>
          <div className="ml-4 p-8">
            <h2 className="text-lg font-bold"> Artist Name </h2>
            <h2 className="text-lg "> {arts.country}  {arts.city}</h2>
          </div>  
        </div>

        {/*Art Date */}
        <div className="mt-4 ">
          <p className="text-gray-600">{arts.address} </p>
        </div>

        {/*Art Description */}
        <div className="mt-4 ">
          <p className="text-gray-600">{arts.description}</p>
        </div>
        
        {/*Return to artindex page  */}
        <div className="w-full py-4 px-4 flex justify-center">
          <div className="flex justify-center w-full mb-3">
          <Link href="/admin/artpendingall"> 
              <a>
                <button
                className=" bg-blueGray-700 active:bg-blueGray-600 bottom-0 right-0 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                >
                Return
                </button>
              </a>
            </Link> 
          </div>
        </div>

      </div>

    </div>)

  );
};

export default cardartdetails;