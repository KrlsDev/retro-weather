import Card from "./components/card";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex gap-2 w-full items">
        <div className="flex-col items-center  w-1/3 pt-1 p-4 border border-green">
          <svg
            className="w-full p-1"
            width="162"
            height="36"
            viewBox="0 0 170 36"
          >
            <use href="/sprite.svg#svg-populares"></use>
          </svg>
          <Card />
        </div>

        <div className="flex-col items-center  w-1/3 pt-1 p-4 border border-green">
          <svg
            className="w-full p-1"
            width="162"
            height="36"
            viewBox="0 0 135 36"
          >
            <use href="/sprite.svg#svg-buscar"></use>
          </svg>
          <Card />
        </div>

        <div className="w-1/3 pt-1 p-4 border border-green">
          <svg
            className="w-full p-1"
            width="162"
            height="36"
            viewBox="0 0 190 36"
          >
            <use href="/sprite.svg#svg-guardadas"></use>
          </svg>
          <Card />
        </div>
      </main>
    </>
  );
}
