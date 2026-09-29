import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { EditFacility } from "./EditFacility";
import { DeleteAlert } from "./DeleteAlert";
import { FaUser } from "react-icons/fa";
import { TbCalendarCheck } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import SportCard from "./SportCard";
import SportBooking from "./SportBooking";

const DetailsCard = ({ details }) => {
  // console.log(details);
  const {
    description,
    imageUrl,
    Location,
    available_slots,
    capacity,
    price,
    booking_count,
    facilityType,
    destinationName,
  } = details;
  return (
    <div className="flex justify-between gap-10 border-2 p-10 rounded-xl mt-10">
      <Image
        src={imageUrl}
        alt={destinationName}
        height={700}
        width={700}
        className="rounded-xl"
      ></Image>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{destinationName}</h1>
        <h1 className="flex items-center gap-1 text-semibold">
          <GrLocation />
          {Location}
        </h1>
        <p className="text-muted">{description}</p>

        <div className="flex justify-between px-1">
          <h1 className="flex items-center gap-1">
            {" "}
            <FaUser />
            {capacity} members
          </h1>
          <h1 className="flex items-center gap-1">
            <TbCalendarCheck className="text-xl " />
            {available_slots} available
          </h1>
        </div>
        <div className="flex justify-between px-3">
          <EditFacility details={details}></EditFacility>
          <DeleteAlert details={details}></DeleteAlert>
        </div>
        <SportBooking details={details}></SportBooking>
      </div>
    </div>
  );
};

export default DetailsCard;
