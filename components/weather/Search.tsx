import { useState } from "react";
import Card from "./Card";

export default function Search() {

  const [input, setState] = useState("")


  

  return (
    <div className="flex-col items-center  w-1/3 pt-1 p-4 border border-green">
      <svg className="w-full p-1" width="162" height="36" viewBox="0 0 135 36">
        <use href="/sprite.svg#svg-buscar"></use>
      </svg>
      <div className="h-10 flex flex-row w-full border border-light-blue mb-4">
        <input className="w-full" type="text" name="" value={input} id="" />
      </div>
    </div>
  );
}
