import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";

import theme from "@/styles/theme";

import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "./globals.scss";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "ЛЮТАПРО - Плазменная резка металла в Одессе",
  description:
    "ЛЮТАПРО - занимаемся плазменной резкой металла на станках с ЧПУ в Одессе. Резка лазером и плазмой по лучшей цене",
  keywords: [
    "Плазменная резка металла",
    "плазма",
    "резка металла",
    "порезка металла",
    "лазерная резка",
    "лазер",
    "сталь",
    "латунь",
    "рубка металла",
    "фланцы",
    "лофт",
    "ограждения",
    "лестницы",
    "перила",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>
            {children}
            <div id="modal-root"></div>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              limit={4}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
