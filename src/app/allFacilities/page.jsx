import SportCard from "@/components/SportCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const AllFacilitiesPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  // console.log(token);
  const res = await fetch("http://localhost:5000/facility", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const facilities = await res.json();

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {facilities.map((facility) => (
          <SportCard key={facility._id} facility={facility}></SportCard>
        ))}
      </div>
    </div>
  );
};

export default AllFacilitiesPage;
