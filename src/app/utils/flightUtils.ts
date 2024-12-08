import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import { Flight } from "@/app/types/Flight";
import { Duration } from "dayjs/plugin/duration";

dayjs.extend(duration);
dayjs.extend(relativeTime);

export const getTotalFlightDuration = (flight: Flight): Duration => {
  const flightDuration = flight.legs.reduce(
    (acc, leg) => acc + leg.durationInMinutes,
    0,
  );
  return dayjs.duration(flightDuration, "minutes");
};
