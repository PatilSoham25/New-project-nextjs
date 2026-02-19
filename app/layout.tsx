import "./globals.css";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

export const metadata = {
  title: "Padmatech Industries",
  description: "Industrial Process Equipment Manufacturer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}