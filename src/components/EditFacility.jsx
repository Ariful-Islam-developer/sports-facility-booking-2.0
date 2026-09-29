"use client";

import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";

export function EditFacility({ details }) {
  const {
    _id,
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
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    console.log(destination);

    const res = await fetch(`http://localhost:5000/facility/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(destination),
    });
    const result = await res.json();
    toast.success("Data updated within mongodb successfully");
    console.log(result);
  };
  return (
    <Modal>
      <Button>Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.Header>
              <Modal.Heading className="text-center text-xl font-bold">
                Add Sports Facilities
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="p-5 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={destinationName}
                        name="destinationName"
                        isRequired
                      >
                        <Label>Destination Name</Label>
                        <Input
                          placeholder="destination name"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Facility Type */}
                    <TextField
                      defaultValue={facilityType}
                      name="facility-type"
                      isRequired
                    >
                      <Label>Facility Type</Label>
                      <Input
                        placeholder="facility-type"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/*booking_count */}
                    <TextField
                      defaultValue={booking_count}
                      name="booking_count"
                      type="number"
                      isRequired
                    >
                      <Label>booking_count</Label>
                      <Input
                        type="number"
                        placeholder="booking_count"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Price */}
                    <TextField
                      defaultValue={price}
                      name="price"
                      type="number"
                      isRequired
                    >
                      <Label>Price_Per_Hour (USD)</Label>
                      <Input
                        type="number"
                        placeholder="price"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Capacity */}
                    <TextField
                      defaultValue={capacity}
                      name="capacity"
                      type="number"
                      isRequired
                    >
                      <Label>Total Capacity</Label>
                      <Input
                        type="number"
                        placeholder="capacity"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* available_slots */}
                    <TextField
                      defaultValue={available_slots}
                      name="available_slots"
                      type="number"
                      isRequired
                    >
                      <Label>available_slots</Label>
                      <Input
                        type="number"
                        placeholder="available_slots"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>
                    {/* Location */}
                    <TextField
                      defaultValue={Location}
                      name="Location"
                      isRequired
                    >
                      <Label>Location</Label>
                      <Input placeholder="Location" className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                      >
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
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
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

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      Save
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
