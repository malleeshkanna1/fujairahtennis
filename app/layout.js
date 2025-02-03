
import Footer from "@/components/Static/Footer";
import "./globals.css";
import Navbar from "@/components/Static/Navbar";
import { ToastContainer } from 'react-toastify';
import CursorDot from "@/components/Static/CursorDot";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <ToastContainer />
        <Footer/>
        <CursorDot/>
      </body>
    </html>
  );
}
