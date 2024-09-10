import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./globals.css";
import Header from "../components/Layout/Header" 
import Footer from "@/components/Layout/Footer";
import { Titillium_Web } from 'next/font/google';


const titillium = Titillium_Web({
  weight: ['200','300','400', '700'], // Choose the font weights
  subsets: ['latin'],      // Subset for optimizing
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/favicon.png" type="image/png" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.6.0/css/fontawesome.min.css" integrity="sha384-NvKbDTEnL+A8F/AA5Tc5kmMLSJHUO868P+lDtTpJIeQdGYaUIuLr4lVGOEA1OcMy" crossOrigin="anonymous"/>
      </head>
      <body className={`${titillium.className}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
