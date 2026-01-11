import { CardProps } from "@/types/weather";


export default function Card( cardProps: CardProps) {
  return (
    <div className=" flex flex-row w-full border border-light-blue mb-4">
      <div className="flex flex-col items-center w-6/8">
        <p className="text-7xl">{cardProps.city}</p>
        <div className="h-35 px-3 flex flex-row justify-between items-center w-full">
          <p className="text-7xl">{Math.round(cardProps.currentTemp)}º</p>
          <svg className="w-35 h-35 shrink-0" viewBox="0 0 242 242">
            <use href="/sprite.svg#svg-sunny"></use>
          </svg>
        </div>
      </div>
      <div className="w-2/8 flex flex-col">
        <div className="flex flex-col items-center border border-light-blue flex-1">
          <p>12/2/2025</p>
          <div className="flex flex-row justify-center-safe gap-4 items-center w-full">
            <p className="">25,5º</p>
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 242 242">
              <use href="/sprite.svg#svg-sunny"></use>
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center border border-light-blue flex-1">
          <p>13/2/2025</p>
          <div className="flex flex-row justify-center-safe gap-4 items-center w-full">
            <p className="">25,5º</p>
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 242 242">
              <use href="/sprite.svg#svg-sunny"></use>
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center border border-light-blue flex-1">
          <p>14/2/2025</p>
          <div className="flex flex-row justify-center-safe gap-4 items-center w-full">
            <p className="">25,5º</p>
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 242 242">
              <use href="/sprite.svg#svg-sunny"></use>
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center border border-light-blue flex-1">
          <p>15/2/2025</p>
          <div className="flex flex-row justify-center-safe gap-4 items-center w-full">
            <p className="">25,5º</p>
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 242 242">
              <use href="/sprite.svg#svg-sunny"></use>
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center border border-light-blue flex-1">
          <p>16/2/2025</p>
          <div className="flex flex-row justify-center-safe gap-4 items-center w-full">
            <p className="">25,5º</p>
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 242 242">
              <use href="/sprite.svg#svg-sunny"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
