"use client";
import {
  Card,
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
} from "@heroui/react";
import React from "react";
import { toast } from "react-toastify";

const addFacilities = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    console.log(destination);

    const res = await fetch("http://localhost:5000/facility", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(destination),
    });
    const result = await res.json();
    toast.success("Data added within mongodb successfully");
    console.log(result);
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center my-10">
        Add Sports Destination
      </h1>
      <Card>
        <form onSubmit={onSubmit} className="p-5 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="destinationName" isRequired>
                <Label>Destination Name</Label>
                <Input placeholder="destination name" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Facility Type */}
            <TextField name="facility-type" isRequired>
              <Label>Facility Type</Label>
              <Input placeholder="facility-type" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/*booking_count */}
            <TextField name="booking_count" type="number" isRequired>
              <Label>booking_count</Label>
              <Input
                type="number"
                placeholder="booking_count"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>

            {/* Price */}
            <TextField name="price" type="number" isRequired>
              <Label>Price_Per_Hour (USD)</Label>
              <Input
                type="number"
                placeholder="price"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>

            {/* Capacity */}
            <TextField name="capacity" type="number" isRequired>
              <Label>Total Capacity</Label>
              <Input
                type="number"
                placeholder="capacity"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>

            {/* available_slots */}
            <TextField name="available_slots" type="number" isRequired>
              <Label>available_slots</Label>
              <Input
                type="number"
                placeholder="available_slots"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>
            {/* Location */}
            <TextField name="Location" isRequired>
              <Label>Location</Label>
              <Input placeholder="Location" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Image URL - Removed preview */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Buttons */}

          <Button
            type="submit"
            variant="outline"
            className=" rounded-none w-full bg-cyan-500 text-white"
          >
            Add Sport Destination
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default addFacilities;
