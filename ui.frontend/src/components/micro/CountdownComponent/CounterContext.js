import React from "react";
import { useHistory } from "react-router-dom";

export const CounterContext = React.createContext();

export const CounterStorage = ({ children }) => {
  const [counter, setCounter] = React.useState(600);
  let history = useHistory();

  React.useEffect(() => {
    if (counter === 0 && localStorage.getItem("token")) {
      localStorage.removeItem("token");
      history.push("/content/reactapp/us/en/compasslogin.html?wcmmode=disabled");
    }
    const interval = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
