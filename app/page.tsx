import Navbar from "../components/ui/Navbar";
import Popular from "../components/weather/Popular";
import Safe from "../components/weather/Safe";
import Search from "../components/weather/Search";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex gap-2 w-full items">
        <Popular />

        <Search />

        <Safe />
      </main>
    </>
  );
}
