import HeaderBox from "./components/HeaderBox.js";
import "./globals.css";
import CalculatorBox from "./components/CalculatorBox.js";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <body className={inter.className}>
      <div className="container">
        <div className="app">
          <div className="app-content">
            <HeaderBox></HeaderBox>
            <CalculatorBox></CalculatorBox>
          </div>
        </div>
      </div>
    </body>
  );
}
