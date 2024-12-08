import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useFlights } from "../../lib/FlightsContext";
import dayjs from "dayjs";

export const FlightDate = () => {
  const { flightDate, setFlightDate } = useFlights();
  const minDate = dayjs().add(1, "days");

  return (
    <DatePicker
      disablePast
      disableHighlightToday
      minDate={minDate}
      label="When"
      value={flightDate}
      onChange={(newDate) => setFlightDate(newDate)}
      renderInput={(params) => <TextField required {...params} />}
    />
  );
};
