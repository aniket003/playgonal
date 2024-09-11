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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      
      </head>
      <body className={`${titillium.className}`}>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
