import { Autocomplete, TextField } from "@mui/material";
import { Airport } from "../../types/Airpoirt";

interface AirportAutocompleteProps {
  airports: Airport[];
  selectedAirport: Airport | null;
  inputLabel: string;
  onChange: (event: React.SyntheticEvent, value: Airport | null) => void;
  onInputChange: (_e: any, newVal: any) => Promise<void> | undefined;
}

export const AirportAutocomplete = ({
  airports,
  selectedAirport,
  inputLabel,
  onChange,
  onInputChange,
}: AirportAutocompleteProps) => {
  return (
    <Autocomplete
      getOptionLabel={(option) => option.presentation.title}
      options={airports}
      getOptionKey={(val) => val.skyId}
      value={selectedAirport}
      noOptionsText="Enter at least 3 characters"
      onChange={onChange}
      onInputChange={onInputChange}
      filterOptions={(x) => x}
      renderInput={(params) => (
        <TextField {...params} required label={inputLabel} />
      )}
    />
  );
};
