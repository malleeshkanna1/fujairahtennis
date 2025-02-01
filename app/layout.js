
import Footer from "@/components/Static/Footer";
import "./globals.css";
import Navbar from "@/components/Static/Navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
