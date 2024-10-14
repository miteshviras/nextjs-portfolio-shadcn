import localFont from "next/font/local";
import "./globals.css";
// import NavbarComponent from "@/components/layouts/navbar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white my-3 mx-4 md:mx-0 `}
      >
        {/* <NavbarComponent /> */}
        {children}
      </body>
    </html>
  );
}
