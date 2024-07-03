import { useState } from "react";
import ButtonTest from "./Test/ButtonTest";
import CounterTest from "./Test/CounterTest";
import Button from "./components/Button/Button";

export default function Home() {
  const [state, setState] = useState('enabled'),
    [count, setCount] = useState(0)

  const handleClick = () => {
    setState('loading disabled');
    setTimeout(() => {
      setState('');
      setTimeout(() => setCount(count + 1), 200);
    }, 3000);
  }

  return (
    <>
      <div>
        <h1>Тест кнопка</h1>
        <Button click={handleClick} size={56} state={state} quantity={count} counter={true} />
      </div >
      <ButtonTest />
      <CounterTest />
    </>
  )
}