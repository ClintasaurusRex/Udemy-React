import { useEffect, useState } from "react";
export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  const [countBtn, setCountBtn] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data.slip.advice, "id:", data.slip.id);
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  const handleCount = function (btn) {
    if (btn === "increase") {
      setCountBtn(countBtn + 1);
    } else if (btn === "decrease") {
      setCountBtn(countBtn - 1);
    } else if (btn === "multiply") {
      setCountBtn(countBtn * 2);
    }
  };

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
      <div className="countBtns">
        <button onClick={() => handleCount("increase")}>Increase Count</button>
        <button onClick={() => handleCount("decrease")}>Decrease Count</button>
        <button onClick={() => handleCount("multiply")}>multiply Count</button>
        <p>{countBtn}</p>
      </div>
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  );
}
