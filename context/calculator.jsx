import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();

export const useCalculator = () => {
  return useContext(CalculatorContext);
};

const CalculatorProvider = ({ children }) => {
  const [displayNumber, setDisplayNumber] = useState("");

  return (
    <CalculatorContext.Provider value={{ setDisplayNumber, displayNumber }}>
      {children}
    </CalculatorContext.Provider>
  );
};

CalculatorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CalculatorProvider;
