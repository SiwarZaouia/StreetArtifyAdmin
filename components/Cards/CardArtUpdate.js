import React, { useState ,useEffect}  from "react";
import Link from 'next/link';
import { gql, useQuery ,useMutation} from "@apollo/client";

//// update art 
const update_art = gql`
mutation ($update_values:street_arts_set_input,$id : uuid!) {
  update_street_arts_by_pk(_set:$update_values, pk_columns: {id: $id}) {
    id 
  }
}
`;
///
const GET_ARTS = gql`
query($id:uuid!){
  street_arts_by_pk(id:$id) {
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

const cardartupdate = (props) => {


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



  const { loading, error, data } = useQuery(GET_ARTS,{
    variables: { id:props.aid },
  });
  const [arts, setArts] = useState([]);

  console.log(data)
  useEffect(() => {
    if (data && data.street_arts_by_pk) {
      const artData = data.street_arts_by_pk;
      setArts(artData);
      setTitle(artData.title);
      setCountry(artData.country);
      setStreet(artData.street);
      setAddress(artData.address);
      setCity(artData.city);
      setPostCode(artData.post_code);
      setDescription(artData.description);
    }
  }, [data]);

  const [updating_art] = useMutation(update_art);
  const handle_update_art = async () => {
    try {
      const { data } = await updating_art({
        variables: {
          update_values: {
            title,
            country,
            street,
            address,
            post_code,
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
          <h6 className="text-blueGray-700 text-xl font-bold">Modify Art </h6>
        </div>
      </div>

      <div className=" bg-white p-2">
        <img src={arts && arts.pictures && arts.pictures[0] && arts.pictures[0].link} alt="Your Image" className="w-full h-full object-cover" />
      </div>

      {/* page content  */}
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0 ">
        <form>

          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Art Update
          </h6>

        {/* art title */}
          <div className="flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                Art Title  
                </label>
                <input
                    type="text"
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
                    value={ address }
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
                    value= {street}
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
                    value={city}
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
                    value={country}
                    onChange={handleCountryChange}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
              </div>
            </div>

            {/* Description */}
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                Post Code
                </label>
                <input
                    value={post_code}
                    onChange={handlePostCodeChange}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
              </div>
            </div>
          </div>

          <hr className="mt-6 border-b-1 border-blueGray-300" />

          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Art Description
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
                  value={description}
                  onChange={handleDescriptionChange}
                  type="text"
                   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  rows="4"
                >
                </textarea>
              </div>

              {/* art image */}
              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                upload new image for your art 
              </h6>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                 <input
                    type="file"
                   />
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />
              
              
              {/* Submit + Cancel updating art RETURN TO INDEXART RATHER ADDING NEW ART OR NOT */}
              <div className="w-full py-4 px-4 flex justify-center">
                  <div className="flex justify-center w-full mb-3">

                    {/* Submit adding art */}
                    {/*<Link href="/admin/artindex">
                      <a>*/}
                      <button
                           onClick={handle_update_art}
                           className=" bg-blueGray-700 active:bg-blueGray-600 bottom-0 right-0 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button"
                        >
                          Update
                        </button>
                     {/** </a>
                    </Link> */}

                    {/* cancel adding art */}
                    <Link href="/admin/artapprovedall"> 
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