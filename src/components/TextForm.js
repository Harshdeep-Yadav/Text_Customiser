import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleUpclick2 = () => {
    console.log(text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleUpclick3 = () => {
    let newText = '';
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>Enter Your Text Here  </h1>
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='light'?'grey':'light'}}
          id="exampleFormControlTextarea1"
          rows={9}
          defaultValue={""}
        />
      </div>
      <button className="btn btn-info mx-2" onClick={handleUpclick}>
        Upper Case
      </button>
      <button className="btn btn-info  mx-2" onClick={handleUpclick2}>
        Lower Case
      </button>
      <button className="btn btn-info  mx-2" onClick={handleUpclick3}>
        Clear
      </button>
      <div className="container my-2 ">
        <h1> Your text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p>Takes {0.008 * text.split("").length} mins to Read this</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
