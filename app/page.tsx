import Image from "next/image";
import Header from "./components/Header";
import TopCards from "./components/TopCards";


export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen" >
      <Header />

      <TopCards />

      <div>

        <BarChart />

      </div>
    </div>
  );
}

