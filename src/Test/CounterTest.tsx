import { useState } from "react";
import './CounterTest.sass';
import Counter from "@components/Counter/Counter";
import { dataPrimaryCounter, dataSecondaryCounter } from "@/data/dataCounter";

export default function CounterTest() {
  const [addValue, setAddValue] = useState('10');
  const [count, setCount] = useState('1');
  const [num, setNum] = useState(1);


  return (
    <>
      <div className="counter-container">
        <div className="counter-primary">
          {dataPrimaryCounter?.map(x => <Counter key={crypto.randomUUID()} size={x.size} stroke={x.stroke} pulse={x.pulse} quantity={count} />)}
        </div>
        <div className="counter-secondary">
          {dataSecondaryCounter?.map(x => <Counter key={crypto.randomUUID()} type={x.type} size={x.size} stroke={x.stroke} pulse={x.pulse} quantity={num} />)}
        </div>
        <div className="counter-values">
          <button className="counter-btn str" onClick={() => setCount(+count + +addValue + '')}>Прибавить строку</button>
          <button className="counter-btn num" onClick={() => setNum(num + +addValue)}>Прибавить число</button>
          <input onChange={(e) =>
            setAddValue(+e.target.value > 100 || +e.target.value < -100 ? '100' : e.target.value)}
            type="number" value={addValue} />
        </div>
      </div>

    </>
  )
}