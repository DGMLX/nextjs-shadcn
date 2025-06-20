import AppBarChart from "@/components/AppBarChart";
import { ChartPieDonutText } from "@/components/AppPieChart";
import { ChartAreaGradient } from "@/components/AreaChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";


export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4"> 
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppBarChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Popular content"/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><ChartPieDonutText/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><TodoList/></div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><ChartAreaGradient/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Latest Transactions"/></div>
    </div>
  );
}
