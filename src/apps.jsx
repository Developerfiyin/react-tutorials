export default function Joke(Props) {}

const names = ["emmanuel", "joseph", "prince", "barry", "ebby"];
const capitalizedNames = names.map((names) => {
  return names.charAt(0).toUpperCase() + names.slice(1);
});

console.log(capitalizedNames);
/* 
  Square them
  return (
    <>
      {" "}
      <h4>Setup: = {Props.Setup}</h4>
      <h5>Punchline: = {Props.Punchline}</h5>
      <p> Upvote is {Props.Upvote} years old</p>
      <hr />
    </>
  ); **/
