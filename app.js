import React, { useState } from "react";

function App() {

  const [screen, setScreen] = useState("home");
  const [points, setPoints] = useState(0);
  const [result, setResult] = useState("");
  const [image, setImage] = useState(null);

  const items = [
    "Plastic ♻️",
    "Paper 📄",
    "Glass 🍾",
    "Organic 🌿"
  ];

  const scanWaste = (event) => {

    const file = event.target.files[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));

    const randomResult =
      items[new Date().getMilliseconds() % items.length];

    setResult(randomResult);
    setPoints(points + 10);

    setScreen("result");
  };

  return (
    <div style={{fontFamily:"Arial", padding:20, textAlign:"center"}}>

      <h1 style={{color:"green"}}>Smart Waste Classifier</h1>

      {screen === "home" && (
        <>
          <p>Scan • Classify • Recycle</p>

          <div style={{
            fontSize:80,
            color:"green",
            background:"#e8f5e9",
            padding:20,
            borderRadius:"50%",
            display:"inline-block"
          }}>
            ♻️
          </div>

          <h2>🏆 Points: {points}</h2>

          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={scanWaste}
          />

          <br/><br/>

          <button onClick={() => setScreen("map")}>
            Open Recycling Map
          </button>
        </>
      )}

      {screen === "result" && (
        <>
          <h2>AI Result 🤖</h2>

          {image && (
            <img
              src={image}
              alt="waste"
              style={{width:300,borderRadius:10}}
            />
          )}

          <h3>This waste is: {result}</h3>

          <button onClick={() => setScreen("home")}>
            Back to Home
          </button>
        </>
      )}

      {screen === "map" && (
        <>
          <h2>Recycling Centers Map</h2>

          <iframe
            title="map"
            width="300"
            height="300"
            src="https://maps.google.com/maps?q=recycling&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />

          <br/><br/>

          <button onClick={() => setScreen("home")}>
            Back
          </button>
        </>
      )}

    </div>
  );
}

export default App;