import React from "react";
import { createPopper } from "@popperjs/core";

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      
      {/* Admin Profile picture */}
      <a
        className="text-blueGray-500 block"
        href=" "         /* take to Admin Profile  */
        ref={btnDropdownRef}
        
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
      
        {/* Profile picture FROM DB ! */}
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="Admin Profile"
              className="w-full rounded-full align-middle border-none shadow-lg"
              src="/img/admin.png"
            />
          </span>
        </div>

      </a>

      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
{/* 
         View Profile CHANGE LINK TO VIEW PROFILE LINK 
        <a
          href="/admin/artadd"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          //onClick={(e) => e.preventDefault()}
          >
          View Profile
        </a> */}
        
        {/* Update Profile CHANGE LINK TO UPDATE PROFILE LINK */}
        <a
          href="/admin/settings"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
         >
          My Profile
        </a>
       
        {/* Logout CHANGE LINK TO LOGOUT LINK */}
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Logout
        </a>
         
      </div>
    </>
  );
};

export default UserDropdown;
