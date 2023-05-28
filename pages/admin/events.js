import React from "react";

// components

import CardEventTable from "components/Cards/CardEventTable.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Events() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardEventTable />
        </div>
      </div>
    </>
  );
}

Events.layout = Admin;
