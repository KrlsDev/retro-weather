import Card from "./Card";

export default function Safe() {
  return (
    <div className="w-1/3 pt-1 p-4 border border-green">
      <svg className="w-full p-1" width="162" height="36" viewBox="0 0 190 36">
        <use href="/sprite.svg#svg-guardadas"></use>
      </svg>
      {/* <Card /> */}
    </div>
  );
}
