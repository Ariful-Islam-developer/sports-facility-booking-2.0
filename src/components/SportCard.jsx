import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaRegStar, FaUser } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLocationOff, MdSports } from "react-icons/md";
import { TbCalendarCheck } from "react-icons/tb";

const SportCard = ({ facility }) => {
  const {
    imageUrl,
    price,
    destinationName,
    capacity,
    booking_count,
    available_slots,
    Location,
    facilityType,
  } = facility;
  return (
    <div className="">
      <Card className="border h-full">
        <div>
          <div className="relative aspect-auto">
            <Image
              src={imageUrl}
              alt={facility.destinationName}
              height={400}
              width={400}
              className="rounded-xl"
            ></Image>
            <Chip className="absolute top-2 right-2 bg-green-400">
              ${price}
            </Chip>
          </div>
          <div className="space-y-3 h-full">
            <div className="flex gap-5 justify-between px-1">
              <h1 className="bg-green-100 rounded-full px-2 mt-3  flex items-center gap-1">
                <FcSportsMode />
                {facilityType}
              </h1>
              <p className="flex items-center gap-1">
                <FaRegStar className="text-yellow-400" />
                {booking_count} bookings
              </p>
            </div>
            <h1 className="text-xl font-semibold">{destinationName}</h1>
            <h1 className="flex items-center gap-1 ">
              <GrLocation />
              {Location}
            </h1>
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
            <Button className="w-full bg-teal-500 ">View Details</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SportCard;
