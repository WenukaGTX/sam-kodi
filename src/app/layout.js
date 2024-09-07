import BootstrapClient from "@/components/BootstrapClient";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Poppins } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "next-themes";

const inter = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Enki - Fractional CRO Services",
  description: "Transform Your Business with Fractional CRO Services Tailored for Success. Driving Growth & Refining Business Practices Through Advanced Sales & business Approaches",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
      <BootstrapClient />
    </html>
  );
}
