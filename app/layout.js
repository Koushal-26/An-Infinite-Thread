import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});

export const metadata = {
  title: "An Infinite Thread",
  description: "Welcome to An Infinite Thread, A space where endless ideas take shape and grow."
};

export default function RootLayout({ children }) {
  return (
    <html className={poppins.className}>
      <body>
        <Navbar/>
          <div className="bg-gray-300 h-[1px]"></div>
          <div className="min-h-screen max-w-8xl container mx-auto text-gray-700">
            {children}
          </div>
        <Footer />
      </body>
    </html>
  );
}
