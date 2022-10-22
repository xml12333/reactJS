import { useState } from "react";
import Drum from "./components/Drum";

function App() {
  const [sounds, setSounds] = useState([
    {
      name: "boom",
      sound: require("./sounds/boom.wav"),
      key: "A",
    },
    {
      name: "clap",
      sound: require("./sounds/clap.wav"),
      key: "S",
    },
    {
      name: "hihat",
      sound: require("./sounds/hihat.wav"),
      key: "D",
    },
    {
      name: "kick",
      sound: require("./sounds/kick.wav"),
      key: "F",
    },
    {
      name: "openhat",
      sound: require("./sounds/openhat.wav"),
      key: "G",
    },
    {
      name: "ride",
      sound: require("./sounds/ride.wav"),
      key: "H",
    },
    {
      name: "snare",
      sound: require("./sounds/snare.wav"),
      key: "J",
    },
    {
      name: "tink",
      sound: require("./sounds/tink.wav"),
      key: "K",
    },
    {
      name: "tom",
      sound: require("./sounds/tom.wav"),
      key: "L",
    },
  ]);

  return (
    <div className="App">
      <h1>React Drumkit</h1>
      <div className="drums">
        {sounds.map((sound, i) => {
          console.log(sounds)
          return <Drum key={i} letter={sound.key} sound={sound.sound} />;
        })}
      </div>
    </div>
  );
}

export default App;
