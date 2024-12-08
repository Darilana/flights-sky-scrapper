import { getTotalFlightDuration } from "@/app/utils/flightUtils";
import { Flight } from "@/app/types/Flight";

describe("flightsUtils", () => {
  it("should return total duration of the flight", () => {
    const totalFlightDuration = getTotalFlightDuration({
      legs: [
        { durationInMinutes: 5 },
        { durationInMinutes: 10 },
        { durationInMinutes: 15 },
      ],
    } as Flight);

    expect(totalFlightDuration.get("minutes")).toEqual(30);
  });
});
