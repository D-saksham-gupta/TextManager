import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleloClick = () => {
    console.log("LowerCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleboldClick = () => {
    
    let newText = text.bold();
    setText(newText);
  };
  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success");
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra Spaces removed", "success");
}
  const handleclearClick = () => {
    
    let newText = ('');
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <label for="myBox" class="form-label">
          
        </label>
        <textarea
          className="form-control" 
          id="myBox"
          value={text}
          onChange={handleOnChange}
          style={{background:props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-success mx-1" onClick={handleloClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-danger mx-1" onClick={handleboldClick}>
        Convert to Bold Letters
      </button>
      <button className="btn btn-secondary mx-1" onClick={handleclearClick}>
       Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>

    </>
  );
}
