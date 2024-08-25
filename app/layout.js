// import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./LayoutComponent/nav-bar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Json Beautifier",
  description: "Beautify your Json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={""}>
        <NavBar/>
        {children}
        </body>
    </html>
  );
}
