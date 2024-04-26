import { useState } from "react";
import { useCalculator } from "../../context/calculator";

const Keyboard = () => {
  const { displayNumber, setDisplayNumber } = useCalculator();

  const [operator, setOperator] = useState("");
  const [previous, setPrevious] = useState("");

  const handleNumberClick = (value) => {
    setDisplayNumber(displayNumber + value);
  };

  const handleClearInput = () => {
    setDisplayNumber("");
  };

  const handleOperator = (value) => {
    setOperator(value);
    setPrevious(parseFloat(displayNumber));
    setDisplayNumber(displayNumber + value);
  };

  const handleEqual = () => {
    let result;

    switch (operator) {
      case "+":
        result = previous + parseFloat(displayNumber);
        break;
      case "-":
        result = previous - parseFloat(displayNumber);
        break;
      case "/":
        result = previous / parseFloat(displayNumber);
        break;
      case "*":
        result = previous * parseFloat(displayNumber);
        break;
      default:
        return;
    }
    setDisplayNumber(result.toString());
    setOperator(null);
    setPrevious(null);
  };

  return (
    <>
      <div className=" grid grid-cols-4 justify-items-center border border-black mt-1">
        <button
          onClick={() => handleNumberClick("7")}
          className="w-full h-full border p-5 font-semibold active:scale-95 text-xl"
        >
          7
        </button>
        <button
          onClick={() => handleNumberClick("8")}
          className="w-full h-full border p-5 font-semibold active:scale-95 text-xl"
        >
          8
        </button>
        <button
          onClick={() => handleNumberClick("9")}
          className="w-full h-full border p-5 font-semibold active:scale-95 text-xl"
        >
          9
        </button>
        <button
          onClick={() => handleOperator("+")}
          className="w-full h-full border p-5 font-semibold active:scale-95 text-xl "
        >
          +
        </button>
        <button
          onClick={() => handleNumberClick("4")}
          className="w-full h-full border p-5 font-semibold active:scale-95 text-xl"
        >
          4
        </button>
        <button
          onClick={() => handleNumberClick("5")}
          className="w-full h-full border p-5 font-semibold active:scale-95 text-xl"
        >
          5
        </button>
        <button
          onClick={() => handleNumberClick("6")}
          className="w-full h-full border p-5 font-semibold active:scale-95 text-xl"
        >
          6
        </button>
        <button
          onClick={() => handleOperator("-")}
          className="w-full h-full border p-5 font-semibold active:scale-95 text-xl"
        >
          -
        </button>
        <button
          onClick={() => handleNumberClick("1")}
          className="w-full h-full border p-5 font-semibold active:scale-95 text-xl"
        >
          1
        </button>
        <button
          onClick={() => handleNumberClick("2")}
          className="w-full h-full border p-5 font-semibold active:scale-95 text-xl"
        >
          2
        </button>
        <button
          onClick={() => handleNumberClick("3")}
          className="w-full h-full border p-5 font-semibold active:scale-95 text-xl"
        >
          3
        </button>
        <button
          onClick={() => handleOperator("*")}
          className="w-full h-full border p-5 font-semibold active:scale-95 text-xl"
        >
          *
        </button>
        <button
          onClick={() => handleNumberClick("0")}
          className="w-full h-full border p-5 font-semibold active:scale-95 text-xl"
        >
          0
        </button>
        <button
          onClick={() => handleClearInput()}
          className="w-full h-full border p-5 font-semibold active:scale-95 text-xl"
        >
          c
        </button>
        <button
          onClick={() => handleOperator("/")}
          className="w-full h-full border p-5 font-semibold active:scale-95 text-xl"
        >
          /
        </button>
        <button
          onClick={() => handleEqual()}
          className="w-full h-full border p-5 font-semibold active:scale-95 text-xl"
        >
          Enter
        </button>
      </div>
    </>
  );
};

export default Keyboard;
