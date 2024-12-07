import React,{useState} from 'react';

export default function TextForm(props){
	// console.log("hi", props.mode);
	
	const handleUPClick =()=>{
			
			let newText=text.toUpperCase();
			setText(newText)
			props.showAlert("Convert To UpperCase"," Success");
		}

	const handleLowerClick =()=>{
			
			let newText=text.toLowerCase();
			setText(newText)
			props.showAlert("Convert To Lowercase"," Success");
			
		}

	const handleOnChange =(event)=>{
			console.log("On change");
			setText(event.target.value)
		}
	const cleartext =()=>{
		setText(" ");
		props.showAlert("Clear test DONE "," Success");
	}
	// remove Extra  Space
	const handleRemoveExtraSpaces = () => {
    setText(text.replace(/\s+/g, ' ').trim()); // Removes extra spaces
	props.showAlert("Remove Extra  space  DONE","Success");
  };

	const [text,setText]=useState( 'Enter Text here');
	return(
		<>
		<div>

			<h1 style={{backgroundColor: props.mode ==='light'?'#ffc107':'#9ec5fe'}}>{props.heading}</h1>
			<div className="mb-3">
			{/* <label htmlFor="textBox" className="form-label">Example textarea</label> */}
			
			<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='light'?'#ffc107':'#9ec5fe'}}  id="exampleFormControlTextarea1" rows="10" > </textarea>
			</div>
			<button className="btn btn-primary my-1 mx-2" onClick={handleUPClick}>Convert To UPPERCASE</button>
			<button className="btn btn-primary my-1 mx-3" onClick={handleLowerClick}>Convert To lowercase</button>
			<button className="btn btn-primary my-1 mx-3" onClick={cleartext}>Clear Text </button>
			<button className="btn btn-primary my-1 mx-3" onClick={handleRemoveExtraSpaces}>Remove Extra Space </button>
		</div>


		<div className="container my-3   " style={{backgroundColor: props.mode ==='light'?'#ffc107':'#9ec5fe',border: '2px solid black'} } >
			
			<h1 >Your Text Summary</h1>
			<p>{text.split(" ").length} Words Have  {text.length} Charaacters </p>
			<p >{0.008 * (text.split(" ").length)} minutes take  to read it</p>
			<h2>Preview</h2>
			<p >{text.length===0?"Enter Something For preview":text}</p>
		</div>
		</>
		
	);

}
