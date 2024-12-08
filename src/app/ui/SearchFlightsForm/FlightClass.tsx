import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { CabinClasses } from "@/app/constants/cabinClasses";
import { useFlights } from "../../lib/FlightsContext";

export const FlightClass = () => {
  const { cabinClass, setCabinClass } = useFlights();

  return (
    <FormControl fullWidth>
      <InputLabel id="flight-class-label">Flight Class</InputLabel>
      <Select
        labelId="flight-class-label"
        value={cabinClass}
        onChange={(e: SelectChangeEvent<CabinClasses>) =>
          setCabinClass(e.target.value as CabinClasses)
        }
        label="Flight Class"
      >
        {Object.keys(CabinClasses).map((classOption) => (
          <MenuItem
            key={classOption}
            value={CabinClasses[classOption as keyof typeof CabinClasses]}
          >
            {classOption}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
