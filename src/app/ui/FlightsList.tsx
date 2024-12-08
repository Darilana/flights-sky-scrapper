"use client";

import {
  ListItemText,
  Typography,
  Button,
  List,
  ListItem,
  CircularProgress,
} from "@mui/material";
import { getTotalFlightDuration } from "@/app/utils/flightUtils";
import { useFlights } from "../lib/FlightsContext";

export const FlightsList = () => {
  const { flights, isLoading } = useFlights();

  if (isLoading) {
    return (
      <div className="w-full max-w-lg text-center mt-8">
        <CircularProgress />
      </div>
    );
  }

  if (!flights) {
    return null;
  }

  return (
    <List className="w-full max-w-lg">
      {flights.length > 0 ? (
        flights.map((flight) => (
          <ListItem key={flight.id} divider>
            <ListItemText
              primary={`Duration: ${getTotalFlightDuration(flight).humanize()}`}
              secondary={`Price: ${flight.price.formatted} \n`}
            />
            <Button
              onClick={() => alert("Booking is not implemented")}
              variant="contained"
            >
              Book
            </Button>
          </ListItem>
        ))
      ) : (
        <Typography align="center" variant="body2">
          No flights found.
        </Typography>
      )}
    </List>
  );
};
