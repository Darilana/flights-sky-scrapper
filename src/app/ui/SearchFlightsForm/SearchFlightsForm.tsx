"use client";

import { searchFlights } from "../../api/flights";
import { Typography } from "@mui/material";
import { Card, CardContent, Button } from "@mui/material";
import { SearchFlightsParams } from "@/app/types/SearchFlightsParams";
import { useFlights } from "../../lib/FlightsContext";
import { PassengersCount } from "./PassengersCount";
import { FlightDate } from "./FlightDate";
import { Departure } from "./Departure";
import { Destination } from "./Destination";
import { FlightClass } from "./FlightClass";
import React from "react";

export const SearchFlightsForm = () => {
  const {
    setFlights,
    cabinClass,
    passengersCount,
    flightDate,
    destination,
    departure,
    isLoading,
    setIsLoading,
  } = useFlights();

  const handleSearch = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (departure && destination && flightDate) {
      const searchParams: SearchFlightsParams = {
        originSkyId: departure.skyId,
        destinationSkyId: destination.skyId,
        originEntityId: departure.entityId,
        destinationEntityId: destination.entityId,
        date: flightDate.format("YYYY-MM-DD"),
        adults: parseInt(passengersCount, 10),
        cabinClass: cabinClass,
      };

      setIsLoading(true);
      try {
        const flights = await searchFlights(searchParams);
        setIsLoading(false);
        setFlights(flights);
      } catch (e: unknown) {
        setIsLoading(false);
        alert("Something went wrong");
      }
    }
  };

  return (
    <Card className="w-full max-w-lg p-4">
      <Typography variant="h5" gutterBottom>
        Flight Search
      </Typography>
      <form className="flex flex-col gap-6" onSubmit={handleSearch}>
        <CardContent className="flex flex-col gap-6">
          <Departure />
          <Destination />
          <FlightDate />
          <PassengersCount />
          <FlightClass />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            disabled={isLoading}
          >
            Search
          </Button>
        </CardContent>
      </form>
    </Card>
  );
};
