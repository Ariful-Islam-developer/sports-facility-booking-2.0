import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { EditFacility } from "./EditFacility";

const DetailsCard = ({ details }) => {
  console.log(details);
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
    <div className="flex ">
      <Image
        src={imageUrl}
        alt={destinationName}
        height={700}
        width={700}
      ></Image>
      <div>
        <h1>{destinationName}</h1>
        <p>{description}</p>
        <EditFacility details={details}></EditFacility>
        <Button>Delete</Button>
        <Button>Conform Booking</Button>
      </div>
    </div>
  );
};

export default DetailsCard;
