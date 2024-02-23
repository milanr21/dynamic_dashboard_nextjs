import Image from 'next/image';
import Header from './components/Header';
import TopCards from './components/TopCards';
import BarChart from './components/BarChart';
import RecentOrders from './components/RecentOrders';
import PieChart from './components/PieChart';

export default function Home() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header />

      <TopCards />

      <div className='p-4 grid  gird-cols-1 md:grid-cols-3 gap-4 '>
        <BarChart />

        <RecentOrders />

        {/* <PieChart /> */}
      </div>
    </div>
  );
}
