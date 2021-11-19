import React, { useState } from 'react'

export default function TextForm(props) {
    // const [text, setText] = useState('Enter text here');
    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("newText"); // Correct way to change the state

    const handleUpClick = () => {
        // console.log(`Uppercase was clicked: ` + text);
        let newText = text.toUpperCase();
        // setText("You have clicked on handleUpClick");
        setText(newText);
        props.showAlert('Converted to uppercase!','success');
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase!','success');
    };

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert('Text cleared!','danger');
    };
    
    const copyToClipboard = () => {
        let copyText = text;
        navigator.clipboard.writeText(copyText);
        
        document.getElementById('copyButton').innerHTML = "Copied";
        setTimeout(() => {
            document.getElementById('copyButton').innerHTML = "Copy";
        }, 1500);

        props.showAlert('Copied to Clipboard!','success');
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces removed','success');
    };

    const handleOnChange = (event) => {
        // console.log(`handleOnChange was clicked`);
        setText(event.target.value);
    };

    const countWords = () => {
        let words = 0;
        let cnt = text.split(" ");
        cnt.forEach((e) => {
            if (e !== "") {
                words++;
            }
        });
        return words;
    }

    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style={{backgroundColor:props.mode==='dark'?'#535353':'white',color:props.mode==='light'?'#535353':'white'}}></textarea>
                </div>
                <button className={`btn btn-${props.btnColor} mx-1`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.btnColor} mx-1`} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className={`btn btn-${props.btnColor} mx-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className={`btn btn-${props.btnColor} mx-1`} id="copyButton" onClick={copyToClipboard}>Copy</button>
                <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-4">
                <h3>Your text summary</h3>
                <p><b>{countWords()}</b> {countWords()>1?'words':'word'} and <b>{text.length}</b> {text.length>1?'characters':'character'}</p>
                <p><b>{0.008 * countWords()}</b> minutes read</p>
                <h3 className="my-2">Preview</h3>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
