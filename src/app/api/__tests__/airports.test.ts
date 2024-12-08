import { describe } from "node:test";
import { searchAirports } from "../airports";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("airports", () => {
  it("should return airports list from the api", async () => {
    const mockResponse = { data: "TEST" };
    mockedAxios.request.mockResolvedValue({ data: mockResponse });

    const result = await searchAirports({
      query: "test",
    });

    expect(result).toEqual(mockResponse.data);
  });
});
