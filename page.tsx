import Image from "next/image";
import TopNav from "./Components/NavBar";
import '../app/globals.css'
import Hero from "./Components/Hero";
export default function Home() {
  return (
    <div>
      <h1 className="bg-black text-white text-xl font-extrabold text-center"> HOME PAGE</h1>
      <TopNav/>
      <Hero/>
    </div>
  );
}
