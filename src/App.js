import React, { useState } from "react";
import "./App.css";
import Paradata from "./Data.json";

function App() {
  // state variable poaranum and paragraphs
  const [paraNum, setParaNum] = useState(0);
  const [paragraphs, setparagraphs] = useState([]);

  // Change the No of input
  let onChangeInput = (e) => {
    setParaNum(e.target.value);
  };

  // function when click on generate
  let onClickParaGenerate = () => {
    const generatedParagraphs = [];
    for (let i = 0; i < paraNum; i++) {
      generatedParagraphs.push(<p key={i}>{i + 1}{") "}{Paradata[i].Paragraph}</p>);
    }
    setparagraphs(generatedParagraphs);
    if(paraNum==0){
      {alert(" Ayyo ! you know that you wrote negative input  😵😵")}
    }
  };

  return (
    <div>
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <p>Paragraphs:</p>
      <input
        type="number"
        onChange={(e) => onChangeInput(e, setParaNum)}
        value={paraNum}
      ></input>
      <button onClick={onClickParaGenerate}>GENERATE</button>

      {/* show paragraph acoording given num*/}
      {(paragraphs.length > 0 && (
        <div>
          <h3>Generated Paragraphs:</h3>
          {paragraphs.map((paragraph, index) => (
            <div key={index}>{paragraph}</div>
          ))}
        </div>
      ))}

      {/*  */}
    </div>
  );
}

export default App;
