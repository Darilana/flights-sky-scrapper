import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ClientLocalizationProvider from "@/app/lib/DatePickerProvider";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Search flights app",
  description:
    "Search for the flights by date, departure and destination airports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ClientLocalizationProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </ClientLocalizationProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
