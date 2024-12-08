import debounce from "lodash.debounce";
import { AirportAutocomplete } from "../common/AirportAutocomplete";
import { searchAirports } from "../../api/airports";
import { useState } from "react";
import { Airport } from "../../types/Airpoirt";
import { useFlights } from "../../lib/FlightsContext";

export const Departure = () => {
  const { departure, setDeparture } = useFlights();
  const [departures, setDepartures] = useState<Airport[]>([]);

  const handleDepartureQueryChange = debounce(
    async (_e, newVal): Promise<void> => {
      const airports = await searchAirports({
        query: newVal,
      });
      setDepartures(airports);
    },
    300,
  );

  return (
    <AirportAutocomplete
      airports={departures}
      selectedAirport={departure}
      inputLabel="Departure"
      onChange={(_e, newValue) => setDeparture(newValue)}
      onInputChange={handleDepartureQueryChange}
    />
  );
};
