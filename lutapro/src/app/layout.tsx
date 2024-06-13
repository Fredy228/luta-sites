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
  title: "Сайт компании ЛЮТАПРО, Одесса",
  description:
    "ЛЮТАПРО оказывает услуги плазменной и лазерной резки, фрезеровки на станках с ЧПУ",
  keywords: [
    "Фрезеровка",
    "чпу",
    "резка фанеры",
    "плазменная резка",
    "чпу одесса",
    "лютапро",
    "lutapro",
    "luta-pro",
    "люта-про",
    "дуб",
    "ясень",
    "алюминий",
  ],
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
