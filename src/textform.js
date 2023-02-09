import React, { useState } from 'react'

const Textform = (props) => {
    const [text, setText]=useState('');

const handleclick = ()=> {
    console.log('button was clicked')
    let newText=text.toUpperCase();
    setText(newText);
}
const handleclick2 = ()=> {
    console.log('button was clicked')
    let newText=text.toLowerCase();
    setText(newText);
}
const handleOnChange = (event)=> {
    console.log('Onchange was clicked')
    setText(event.target.value)
}
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label for="myBox" className='form-label'></label>
            <textarea className='form-control' id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"> </textarea>
        </div>
        <button className='btn btn-primary' onClick={handleclick}> convert to uppercase</button>
        <button className='btn btn-primary mx-3' onClick={handleclick2}> convert to lowercase</button>
      
    </div>
    <div className='container my-3'>
        <h2>Your Text Summary</h2>
        {text.split(' ').length} words {text.length} charcters
        <p>{0.008*text.split(' ').length} mins of reading</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

export default Textform
