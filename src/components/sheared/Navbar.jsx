"use client";
import { authClient } from "@/lib/auth-client";
import { ChevronDown } from "@gravity-ui/icons";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const handleSignOut = async () => {
  await authClient.signOut();
};
const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  return (
    <div className="border-b-2">
      <div className="flex justify-between items-center py-3 w-11/12 mx-auto">
        <h1>logo</h1>
        <ul className="flex gap-5 items-center">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/allFacilities"}>All Facilities</Link>
          </li>
          <li>
            <Link href={"/myBookings"}>My Bookings</Link>
          </li>
          <li>
            <Link href={"/addFacilities"}>Add Facility</Link>
          </li>
          <li>
            <Link href={"/manageFacilities"}>Manage My Facilities</Link>
          </li>
        </ul>

        <div className="">
          {!user && (
            <ul className="flex items-center text-sm">
              <li>
                <Button className="mr-4 bg-teal-500">
                  <Link href={"/signup"}>SignUp</Link>
                </Button>
              </li>
              <li>
                <Button className="bg-teal-500">
                  <Link href={"/signin"}>SignIn</Link>
                </Button>
              </li>
            </ul>
          )}

          {user && (
            <div className="relative group">
              <button className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition-colors border">
                <Avatar size="sm">
                  <Avatar.Image
                    alt={user.name}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                </Avatar>
                <span className="hidden lg:block text-sm font-semibold max-w-28 truncate">
                  {user.name}
                </span>
                <ChevronDown className="w-4 h-4 text-slate-500 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute right-0 top-full w-56 bg-white border border-slate-200 rounded-xl shadow-xl hidden group-hover:flex flex-col py-2 z-50">
                <div className="px-4 py-3 border-b border-slate-100">
                  <p className="font-bold text-sm">{user.name}</p>
                  <p className="text-xs text-slate-500 truncate">
                    {user.email}
                  </p>
                </div>

                <Link
                  href="/myBookings"
                  className="px-4 py-2 text-sm hover:bg-gray-50"
                >
                  My Bookings
                </Link>

                <Link
                  href="/addFacilities"
                  className="px-4 py-2 text-sm hover:bg-gray-50"
                >
                  Add Facilities
                </Link>
                <Link
                  href="/manageFacilities"
                  className="px-4 py-2 text-sm hover:bg-gray-50"
                >
                  Manage My Facilities
                </Link>

                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 text-left"
                >
                  Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
