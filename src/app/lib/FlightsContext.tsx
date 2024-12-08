"use client";

import React, { createContext, useContext, useState } from "react";
import { Flight } from "../types/Flight";
import { CabinClasses } from "../constants/cabinClasses";
import dayjs, { Dayjs } from "dayjs";
import { Airport } from "../types/Airpoirt";

interface FlightsContext {
  flights: Flight[] | null;
  setFlights: React.Dispatch<React.SetStateAction<Flight[] | null>>;
  cabinClass: CabinClasses;
  setCabinClass: React.Dispatch<React.SetStateAction<CabinClasses>>;
  passengersCount: string;
  setPassengersCount: React.Dispatch<React.SetStateAction<string>>;
  flightDate: Dayjs | null;
  setFlightDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  destination: Airport | null;
  setDestination: React.Dispatch<React.SetStateAction<Airport | null>>;
  departure: Airport | null;
  setDeparture: React.Dispatch<React.SetStateAction<Airport | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const FlightsContext = createContext<FlightsContext | null>(null);

export const FlightsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [flights, setFlights] = useState<Flight[] | null>(null);
  const [cabinClass, setCabinClass] = useState<CabinClasses>(
    CabinClasses.Economy,
  );
  const [passengersCount, setPassengersCount] = useState("1");
  const [flightDate, setFlightDate] = useState<Dayjs | null>(
    dayjs().add(1, "days"),
  );
  const [destination, setDestination] = useState<Airport | null>(null);
  const [departure, setDeparture] = useState<Airport | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <FlightsContext.Provider
      value={{
        flights,
        setFlights,
        cabinClass,
        setCabinClass,
        passengersCount,
        setPassengersCount,
        flightDate,
        setFlightDate,
        destination,
        setDestination,
        departure,
        setDeparture,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </FlightsContext.Provider>
  );
};

export const useFlights = () => {
  const records = useContext(FlightsContext);

  if (!records) {
    throw new Error("useFlights must be used within a FlightsProvider");
  }

  return records;
};
