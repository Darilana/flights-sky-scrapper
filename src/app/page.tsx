"use client";

import { FlightsList } from "./ui/FlightsList";
import { FlightsProvider } from "./lib/FlightsContext";
import { SearchFlightsForm } from "./ui/SearchFlightsForm/SearchFlightsForm";

export default function Home() {
  return (
    <FlightsProvider>
      <div className="min-h-screen p-8 gap-8 font-[family-name:var(--font-geist-sans)">
        <main className="flex flex-col items-center	gap-8">
          <SearchFlightsForm />
          <FlightsList />
        </main>
      </div>
    </FlightsProvider>
  );
}
