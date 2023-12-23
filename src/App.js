import React, { useState } from "react";
import "./App.css";
import Paradata from "./Data.json";
import Header from "./Component/Header";

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
    if (paraNum == 0) {
      {
        alert(" Ayyo ! you know that you wrote negative input  😵😵");
      }
    } else if (paraNum >= 10) {
      {
        alert(
          " Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀"
        );
      }
    } else {
      // add paragraph according to paranum
      const generatedParagraphs = [];
      for (let i = 0; i < paraNum; i++) {
        generatedParagraphs.push(
          <p key={i}>
            {i + 1}
            {") "}
            {Paradata[i].Paragraph}
          </p>
        );
      }
      setparagraphs(generatedParagraphs);
    }
  };

  return (
    <div className="App_conatiner">
      <Header></Header>
      <div className="App_conatiner_content">
        <h1 className="app_heading">TIRED OF BORING LOREM IPSUM?</h1>
        <div>
          <p>Paragraphs:</p>
          <input
            type="number"
            onChange={(e) => onChangeInput(e, setParaNum)}
            value={paraNum}
          ></input>
        </div>
        <button onClick={onClickParaGenerate}>GENERATE</button>
      </div>

      {/* show paragraph acoording given num*/}
      {paragraphs.length > 0 && (
        <div className="app_para_container">
          <h3>Generated Paragraphs:</h3>
          {paragraphs.map((paragraph, index) => (
            <div key={index} className="App_conatainer_gerated_para">
              {paragraph}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
