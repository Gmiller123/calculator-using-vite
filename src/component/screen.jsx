import { useCalculator } from "../../context/calculator";

const Screen = () => {
  const { displayNumber } = useCalculator();

  return (
    <div className="border border-black h-20">
      <div className=" flex items-end h-full justify-end p-2">
        <h1 className="text-xl font-semibold">{displayNumber}</h1>
      </div>
    </div>
  );
};

export default Screen;
