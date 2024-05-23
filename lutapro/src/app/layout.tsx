import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "./globals.scss";

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
          {children}
          <div id="modal-root"></div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
