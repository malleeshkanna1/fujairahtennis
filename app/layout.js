
import Footer from "@/components/Static/Footer";
import "./globals.css";
import Navbar from "@/components/Static/Navbar";
import { ToastContainer } from 'react-toastify';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <ToastContainer />
        <Footer/>
      </body>
    </html>
  );
}
