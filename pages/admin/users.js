import React from "react";

// components

 
// layout for page

import Admin from "layouts/Admin.js";
import CardUsersAll from "components/Cards/CardUsersAll";

export default function Users() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardUsersAll />
        </div>
      </div>
    </>
  );
}

Users.layout = Admin;

