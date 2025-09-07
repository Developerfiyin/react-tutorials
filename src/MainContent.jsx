/**  export default function MainComponent() {
  return (
    <main>
      <h1>Reasons i am excited to learn to React.</h1>
      <ol>
        <li>It will really help me to become a great software engineer </li>
        <li>I am curious about learning</li>
        <li>I love the space and logo</li>
        <li>it will help me become more employable.</li>
        <li>it will expand my knowledge on plain javascript</li>
      </ol>
    </main>
  );
}*/
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
import Navbar from "./components/navbar";
import Main from "./components/main.jsx";
import AnimalContainer from "./apps.jsx";
import Joke from "./apps.jsx";

function Pages() {
  //Pages
  return (
    <>
      <Main />
      <Navbar
        img={{
          src: "./src/assets/mount fuji.png",
          alt: "mount fuji image",
        }}
        name="Mount Fuji"
        date="12 Jan 2021 - 24 Jan 2021"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380,600km) the single most popular tourist site in Japan"
        GoggleLink="https://maps.app.goo.gl/LbHsS5HRgcfaAjcy5"
      />
      <Joke
        Setup="I got my daughter a fridge for her birthday.. "
        Punchline="I can't wait to see her face light up when she opens it."
        Upvote={25}
        Downvotes={Comment}
      />
      <Joke
        Setup="what excatly is your mutant power?"
        Punchline="I whisper it's not very good in his left ear but he hears it in his right ear."
        Upvote={25}
      />
      <Joke
        Setup="I am just learning props"
        Punchline="React can be so frustrating when you encounter bugs, i have been fixing bug since morning"
        Upvote={25}
        isPun={true}
      />
      <Joke
        Setup="Do you have any pets? [remembers girls like sensitive guys] a cat"
        Punchline="what's his name [remembers girls also like touch guys missile launcher]"
      />
    </>
  );
}

root.render(<Pages />);
