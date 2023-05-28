import React from "react";
import Link from 'next/link';

// CHANGE THE CHART ICON & COLORS !!!!


// Header Arts Stats : Approved and Pending Cards 
// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap justify-center">

              {/* Event Card stats */}
              
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <Link href="/admin/artapproved">
              <a>
                <CardStats
                  statSubtitle="APPROVED Arts"
                  statDescripiron="Click here to Manage"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-purple-500"
                  />
              </a>
              </Link>
              </div>

              {/* Arts Card stats */}
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <Link href="/admin/artpending">
              <a>
                <CardStats
                  statSubtitle="PENDING Arts"
                  statDescripiron="Click here to Manage"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-red-500"
                />
              </a>
              </Link>
              </div>

             
             
                 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
