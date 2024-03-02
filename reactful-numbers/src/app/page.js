import HeaderBox from "./components/HeaderBox.js";
import styles from "./page.module.css";
import "./globals.css";
import CalculatorBox from "./components/CalculatorBox.js";
export default function Home() {
  return (
    <div className="app">
      <HeaderBox></HeaderBox>
      <CalculatorBox></CalculatorBox>
    </div>
  );
}
