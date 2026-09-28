import SportCard from "@/components/SportCard";
import React from "react";

const AllFacilitiesPage = async () => {
  const res = await fetch("http://localhost:5000/facility");
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
