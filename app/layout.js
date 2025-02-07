
import Footer from "@/components/Static/Footer";
import "./globals.css";
import Navbar from "@/components/Static/Navbar";
import { ToastContainer } from 'react-toastify';
import CursorDot from "@/components/Static/CursorDot";
import WhatsappChatBubble from "@/components/Static/WhatsappChatBubble";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <ToastContainer />
        <Footer/>
        <WhatsappChatBubble/>
        <CursorDot/>
      </body>
    </html>
  );
}
