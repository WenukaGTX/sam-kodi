import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "@/components/bootstrapClient";
import { Montserrat } from "next/font/google";
import "./globals.scss";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "LA7 Interior Studio",
  description: "LA7 is an interior design studio & a construction company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <BootstrapClient />
    </html>
  );
}
