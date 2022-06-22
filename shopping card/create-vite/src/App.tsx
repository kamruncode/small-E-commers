import "./App.css";
import { useState, useEffect, createContext, Dispatch } from "react";

import Shopping from "./shopping";
import Card from "./card";
import { IData } from "./type/type";

export interface IMyContext {
  data: IData[];
  setData: Dispatch<IData[]>;
  card: IData[];
  setCard: Dispatch<IData[]>;
}

export const MyContext = createContext<IMyContext>({
  data: [],
  setData: () => {},
  card: [],
  setCard: () => {},
});

function App() {
  const [data, setData] = useState<IData[]>([]);
  const [card, setCard] = useState<IData[]>([]);

  useEffect(() => {
    fetch("./data.json")
      .then((s) => s.json())
      .then((s) => setData(s));
  }, []);

  return (
    <div className="App">
      <MyContext.Provider value={{ data, setData, card, setCard }}>
        <Shopping />

        <Card />
      </MyContext.Provider>
    </div>
  );
}

export default App;
