import debounce from "lodash.debounce";
import { AirportAutocomplete } from "../common/AirportAutocomplete";
import { searchAirports } from "../../api/airports";
import { useState } from "react";
import { Airport } from "../../types/Airpoirt";
import { useFlights } from "../../lib/FlightsContext";

export const Destination = () => {
  const { destination, setDestination } = useFlights();
  const [destinations, setDestinations] = useState<Airport[]>([]);

  const handleDestinationQueryChange = debounce(
    async (_e, newVal): Promise<void> => {
      const airports = await searchAirports({
        query: newVal,
      });
      setDestinations(airports);
    },
    300,
  );

  return (
    <AirportAutocomplete
      airports={destinations}
      selectedAirport={destination}
      inputLabel="Destination"
      onChange={(_e, newValue) => setDestination(newValue)}
      onInputChange={handleDestinationQueryChange}
    />
  );
};
