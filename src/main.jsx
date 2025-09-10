export default function Main() {
  function onClick() {
    alert("This Button is Clicked!");
  }

  function handleClick() {
    alert("double click on the img");
  }
  return (
    <>
      <button onClick={onClick}>Click me</button>;
      <img
        src="/src/assets/react.svg"
        alt="react.svg"
        onDoubleClick={handleClick}
      />
    </>
  );
}
