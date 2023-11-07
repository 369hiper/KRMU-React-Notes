import React, {useState} from 'react';
export default function TextForm(props){
  const handleOnChange = (event) => {
    console.log("Onchange");
    setText(event.target.value)
  }
  const handleUpClick = (event) => {
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const [text, setText] = useState('Enter Your Text');

    return (
    <div className="mb-3">
  <label for="myBox" className="form-label">Enter your Text here</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
  <button className="btn btn-primary mx-1"><a href="http://www.google.com">Go to Google</a></button>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
</div>
    )
}