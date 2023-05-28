import React, { useState ,useEffect}  from "react";
import Link from 'next/link';
import { gql, useQuery ,useMutation} from "@apollo/client";

//// update art 
const approve_event = gql`
mutation ($update_values:events_set_input,$id : uuid!) {
  update_events_by_pk(_set:$update_values, pk_columns: {id: $id}) {
    id 
  }
}
`;
///
const GET_EVENTS = gql`
query($id:uuid!){
  update_events_by_pk(id:$id) {
    title
    country
    street
    address
    city
    post_code
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

const cardeventupdate = (props) => {


const [title, setTitle] = useState("");
const [country, setCountry] = useState("");
const [street, setStreet] = useState("");
const [post_code, setPostCode] = useState("");
const [description, setDescription] = useState("");
const [city, setCity] = useState("");
const [address, setAddress] = useState("");

  

const handleTitleChange = (event) => {
  setTitle(event.target.value);
};

 

///
const handleCountryChange = (e) => {
  setCountry(e.target.value);
};
const handleStreetChange = (e) => {
  setStreet(e.target.value);
};
const handlePostCodeChange = (e) => {
  setPostCode(e.target.value);
};
const handleDescriptionChange = (e) => {
  setDescription(e.target.value);
};
const handleAddressChange = (e) => {
  setAddress(e.target.value);
};
const handleCityChange = (e) => {
  setCity(e.target.value)
}



  const { loading, error, data } = useQuery(GET_EVENTS,{
    variables: { id:props.aid },
  });
  const [events, setEvents] = useState([]);

  console.log(data)
  useEffect(() => {
    if (data && data.events_by_pk) {
      const eventData = data.events_by_pk;
      setArts(eventData);
      setTitle(eventData.title);
      setCountry(eventData.country);
      setStreet(eventData.street);
      setAddress(eventData.address);
      setCity(eventData.city);
      setDescription(eventData.description);
    }
  }, [data]);

  const [approving_event] = useMutation(approve_event);
  const handle_approve_event = async () => {
    try {
      const { data } = await approving_event({
        variables: {
          update_values: {
            title,
            country,
            street,
            address,
            description,
            city,
            user_id:"28adbac0-35b1-4d10-9ce9-adb3f4b6bc6c",
            pictures: {data: {link: "https://hejjllo.img"}}
          }, 
         id: props.aid
        },
      });
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  return (

    loading ? (<div>Loading ...</div>)
    :(
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 items-center lg:w-8/12 mx-auto mt-2">
      
      {/* title page */}
      <div className="relative w-full rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex ">
          <h6 className="text-blueGray-700 text-xl font-bold">Approve Art </h6>
        </div>
      </div>

      {/* page content  */}
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0 ">
        <form>
   <div className=" bg-white p-2">
          <img src={arts && arts.pictures && arts.pictures[0] && arts.pictures[0].link} alt="Your Image" className="w-full h-full object-cover" />
          </div>
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Art Details 
          </h6>
        
       

        {/* art title */}
          <div className="flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password" 
                >
                Event Name  
                </label>
                <input
                    type="text" disabled
                    value={title}
                    onChange={handleTitleChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />


              </div>
            </div>  
          </div> 
          
          <hr className="mt-6 border-b-1 border-blueGray-300" />

          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Location
          </h6>

          {/* art adress */}
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                Adress
                </label>
                <input
                    value={ address } disabled
                    onChange={handleAddressChange}

                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
              </div>
            </div>
           
            {/* street */}
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                Street
                </label>
                <input
                    value= {street} disabled
                    onChange={handleStreetChange}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>
            </div>

            {/* City */}
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                City 
                </label>
                <input
                    value={city} disabled
                    onChange={handleCityChange}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
              </div>
            </div>

            {/* Country */}
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                Country
                </label>
                <input
                    value={country} disabled
                    onChange={handleCountryChange}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
              </div>
            </div>

            
          </div>

          <hr className="mt-6 border-b-1 border-blueGray-300" />

          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Event Description
          </h6>

          <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              
              {/* art description */}
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                Description 
                </label>
                <textarea
                  value={description} disabled
                  onChange={handleDescriptionChange}
                  type="text"
                   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  rows="4"
                >
                </textarea>
              </div>

               
              <hr className="mt-6 border-b-1 border-blueGray-300" />
              
              
              {/* Submit + Cancel updating art RETURN TO INDEXART RATHER ADDING NEW ART OR NOT */}
              <div className="w-full py-4 px-4 flex justify-center">
                  <div className="flex justify-center w-full mb-3">

                    {/* Submit adding art */}
                    {/*<Link href="/admin/artindex">
                      <a>*/}
                      <button
                           onClick={handle_approve_event}
                           className=" bg-blueGray-700 active:bg-blueGray-600 bottom-0 right-0 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button"
                        >
                          Approve
                        </button>
                     {/** </a>
                    </Link> */}

                    {/* cancel adding art */}
                    <Link href="/admin/events"> 
                      <a>
                        <button
                           className=" bg-blueGray-700 active:bg-blueGray-600 bottom-0 right-0 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button"
                        >
                          Cancel
                        </button>
                      </a>  
                    </Link>

                  </div>
              </div>
              
            </div>
          </div>

        </form>
      </div>

    </div>)
 )
}

export default cardartupdate;