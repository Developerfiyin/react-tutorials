import { useState } from "react";

export default function Main() {
  //function justClick() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  console.log(handleClick);

  function hanleClick() {
    alert("double click on the img");
  }
  return (
    <>
      <h4>You Clicked this button {count} times</h4>
      <button onClick={hanleClick}>Click me</button>;
      <img
        src="/src/assets/react.svg"
        alt="react.svg"
        onDoubleClick={handleClick}
      />
    </>
  );
}
