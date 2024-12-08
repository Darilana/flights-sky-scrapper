import { describe } from "node:test";
import { searchFlights } from "../flights";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("flights", () => {
  it("should return search flights results from api", async () => {
    const mockResponse = { data: { itineraries: "TEST" } };
    mockedAxios.request.mockResolvedValue({ data: mockResponse });

    const result = await searchFlights({
      originSkyId: "LOND",
      destinationSkyId: "NYCA",
      originEntityId: "27544008",
      destinationEntityId: "27537542",
      cabinClass: "economy",
      sortBy: "best",
      currency: "USD",
      market: "en-US",
      countryCode: "US",
      date: "2024-11-01",
    });

    expect(result).toEqual(mockResponse.data.itineraries);
  });
});
