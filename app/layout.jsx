import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Padmatech Industries",
  description: "Padmatech Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {/* Top */}
        <Navbar />

        {/* Changing page content */}
        <main className="pt-20">
          {children}
        </main>

        {/* Bottom */}
        <Footer />
      </body>
    </html>
  );
}