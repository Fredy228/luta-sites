import type { Metadata } from "next";

import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/500.css";
import "@fontsource/lato/700.css";
import "./globals.scss";

export const metadata: Metadata = {
  title: "ЛЮТАПРО",
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
    " люта-про",
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
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
