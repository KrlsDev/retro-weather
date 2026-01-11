import Card from "./Card";

export default function Search() {
  return (
    <div className="flex-col items-center  w-1/3 pt-1 p-4 border border-green">
      <svg className="w-full p-1" width="162" height="36" viewBox="0 0 135 36">
        <use href="/sprite.svg#svg-buscar"></use>
      </svg>
      {/* <Card /> */}
    </div>
  );
}
