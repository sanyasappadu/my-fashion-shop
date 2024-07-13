import HorizontalCard from "@/components/HorizontalCard";
import VerticalCard from "@/components/VerticalCard";

export default function Home() {
  return (
    <main className="flex flex-row">
      <div>hello world
        <HorizontalCard/>
        <VerticalCard/>
      </div>
    </main>
  );
}
