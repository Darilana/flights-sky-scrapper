import axios, { AxiosResponse } from "axios";
import { SearchAirportParams } from "@/app/types/SearchAirportParams";
import { Airport } from "@/app/types/Airpoirt";
import { SearchAirportResponse } from "../types/SearchAirportResponse";

export async function searchAirports(
  params: SearchAirportParams,
): Promise<Airport[]> {
  if (!params.query || params.query.length < 3) {
    return [];
  }

  const defaultParams: Readonly<Partial<SearchAirportParams>> = {
    locale: "en-US",
  };

  const options = {
    method: "GET",
    url: `https://${process.env.AIR_SCRAPPER_HOST}/api/v1/flights/searchAirport`,
    params: {
      ...params,
      ...defaultParams,
    },
    headers: {
      "x-rapidapi-key": process.env.RAPID_API_KEY,
      "x-rapidapi-host": process.env.AIR_SCRAPPER_HOST,
    },
  };

  const { data }: AxiosResponse<SearchAirportResponse> =
    await axios.request(options);

  return data.data;
}
