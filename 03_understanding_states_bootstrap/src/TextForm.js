import React from 'react';


export default function TextForm(props){
    return (
    <div className="mb-3">
  <label for="myBox" className="form-label">Enter your Text here</label>
  <textarea className="form-control" id="myBox" rows="10"></textarea>
</div>
    )
}