import axios, { AxiosResponse } from "axios";
import { AxiosRequestConfig } from "axios";
import { SearchFlightsParams } from "../types/SearchFlightsParams";
import { Flight } from "@/app/types/Flight";
import { SearchFlightsResponse } from "@/app/types/SearchFlightsResponse";

export async function searchFlights(
  params: SearchFlightsParams,
): Promise<Flight[]> {
  const defaultParams: Readonly<Partial<SearchFlightsParams>> = {
    sortBy: "best",
    currency: "USD",
    market: "en-US",
    countryCode: "US",
  };

  const options: AxiosRequestConfig = {
    method: "GET",
    url: `https://${process.env.AIR_SCRAPPER_HOST}/api/v2/flights/searchFlights`,
    params: {
      ...defaultParams,
      ...params,
    },
    headers: {
      "x-rapidapi-key": process.env.RAPID_API_KEY,
      "x-rapidapi-host": process.env.AIR_SCRAPPER_HOST,
    },
  };

  const { data }: AxiosResponse<SearchFlightsResponse> =
    await axios.request(options);

  return data.data.itineraries;
}
