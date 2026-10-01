import DetailsCard from "@/components/DetailsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  // console.log(token);
  const res = await fetch(`http://localhost:5000/facility/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const details = await res.json();

  return (
    <div>
      <DetailsCard details={details}></DetailsCard>
    </div>
  );
};

export default DetailsPage;
