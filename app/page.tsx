import Image from 'next/image';
import Header from './components/Header';
import TopCards from './components/TopCards';
import BarChart from './components/BarChart';
import RecentOrders from './components/RecentOrders';
import PieChart from './components/PieChart';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header />

      <TopCards />

      <div className='p-4 grid   md:grid-cols-2 gap-4 '>
        <Tabs
          defaultValue='pie-chart'
          className='p-4 bg-white h-[40rem]  rounded-2xl '
        >
          <TabsList>
            <TabsTrigger value='pie-chart'>Pie Chart</TabsTrigger>
            <TabsTrigger value='bar-graph'>Bar Graph</TabsTrigger>
          </TabsList>
          <TabsContent value='pie-chart'>
            <BarChart />
          </TabsContent>
          <TabsContent value='bar-graph'>
            <PieChart />
          </TabsContent>
        </Tabs>

        <RecentOrders />
      </div>
    </div>
  );
}
