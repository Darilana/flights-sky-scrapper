import { TextField } from "@mui/material";
import { useFlights } from "../../lib/FlightsContext";

export const PassengersCount = () => {
  const { passengersCount, setPassengersCount } = useFlights();

  return (
    <TextField
      required
      label="Number of Passengers"
      type="number"
      inputProps={{ min: 1 }}
      value={passengersCount}
      onChange={(evt) => setPassengersCount(evt.target.value)}
      fullWidth
    />
  );
};
