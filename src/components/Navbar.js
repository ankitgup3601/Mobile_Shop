import Image from "next/image";
import React from "react";
import img from "../../assets/logo/logo.svg";
import {
  ChevronDownIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
  return (
    <>
      <navbar className="bg-bgDef p-3 navbar">
        <div style={{ display: "flex", width: "70%", gap: "20px", cursor : "pointer"}}>
          <Image src={img} width="5px" loading="eager" />
          <button
            className="text-white bg-transparent text-med font-semibold"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              justifyContent: "center",
              cursor : "pointer"
            }}
          >
            All Categories <ChevronDownIcon width={15} />
          </button>
          <div style={{display : "flex"}}>
            <MagnifyingGlassIcon width={30} className="text-searchBar pl-1" style={{position : "relative", left : "32px"}}/>
            <input
              type={"text"}
              className="text-searchBar searchBar"
              placeholder="Search for gadgets & brands"
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <HeartIcon width={30} className="text-white" style={{cursor : "pointer"}} />
          <ShoppingCartIcon width={30} className="text-white"  style={{cursor : "pointer"}}/>
          <div style={{ display: "flex", alignItems: "center", gap: "5px", cursor : "pointer" }}>
            <UserCircleIcon color="white" width={40} />
            <p className="text-white">Login/Signup</p>
          </div>
        </div>
      </navbar>
    </>
  );
};

export default Navbar;
