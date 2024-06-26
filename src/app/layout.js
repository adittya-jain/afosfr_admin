import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "pP | admin panel",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/cloudinary/1.11.1/cloudinary.min.js"></script> {/* Added the script tag here */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Other meta tags and link tags can go here */}
      </head>
      <body className={inter.className}> 
    
        {children}
     
        </body>
    </html>
  );
}
