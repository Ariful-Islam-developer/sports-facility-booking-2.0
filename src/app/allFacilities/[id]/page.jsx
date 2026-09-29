import DetailsCard from "@/components/DetailsCard";
import React from "react";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/facility/${id}`);
  const details = await res.json();

  return (
    <div>
      <DetailsCard details={details}></DetailsCard>
    </div>
  );
};

export default DetailsPage;
