"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";

import React, { useState } from "react";
import { IoBookmarksOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const SportBooking = ({ details }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  //   console.log(user);
  const [departureDate, setDepartureDate] = useState(null);
  //   console.log(new Date(departureDate));
  const {
    _id,
    price,
    destinationName,
    imageUrl,
    Location,
    available_slots,
    capacity,
    booking_count,
    facilityType,
  } = details;

  const handleBooking = async () => {
    const bookData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      detailsId: _id,
      destinationName,
      price,
      imageUrl,
      facilityType,
      Location,
      departureDate: new Date(departureDate),
    };

    console.log(bookData);

    // const { data: tokenData } = await authClient.token();
    // console.log(tokenData);
    // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //     authorization: `Bearer ${tokenData.token}`,
    //   },
    //   body: JSON.stringify(bookData),
    // });
    // const data = await res.json();
    // toast.success("You Booked successfully");
    // console.log(data);
  };

  return (
    <div>
      <div className="">
        <Card className="border">
          <p className="text-sm text-muted">Start Your Booking</p>
          <h2 className="text-4xl font-bold text-teal-600">${price}</h2>
          <p className="text-sm text-muted">/per person</p>
          <DateField
            className="w-[256px]"
            name="date"
            onChange={setDepartureDate}
          >
            <Label>Departure Date</Label>
            <DateField.Group>
              <DateField.Input>
                {(segment) => <DateField.Segment segment={segment} />}
              </DateField.Input>
            </DateField.Group>
          </DateField>

          <Button
            onClick={handleBooking}
            variant="outline"
            className="bg-teal-600 text-white w-full"
          >
            <IoBookmarksOutline />
            Conform Booking
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default SportBooking;
