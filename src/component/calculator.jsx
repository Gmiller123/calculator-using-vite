import Keyboard from "./keyboard";
import Screen from "./screen";

const Calculator = () => {
  return (
    <div className=" h-screen w-full pt-10">
      <div className=" max-w-[300px] m-auto">
        <h1 className=" text-3xl font-bold text-center mb-5">Calculator</h1>
        <Screen />
        <Keyboard />
      </div>
    </div>
  );
};

export default Calculator;
