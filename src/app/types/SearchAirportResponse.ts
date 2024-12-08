import {Airport} from "@/app/types/Airpoirt";

export interface SearchAirportResponse {
    status: boolean;
    timestamp: number;
    data: Airport[];
}