import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Image from "next/image";
// import Product from "./product/page";
import Products from "@/components/products/Products";
import CandleSection from "@/components/CandleSection/CandleSection";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Products/>
      <CandleSection/>
    </div>
  );
}
