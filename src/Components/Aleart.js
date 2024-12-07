import React from 'react'

function Aleart(props) {
	const capitalize =(word)=>{
			const lowerch=word.toLowerCase();
			return lowerch.charAt(0).toUpperCase()+lowerch.slice(1);
		}
  return (
	<div>	
		
		<div className="alert alert-primary alert-dismissible fade show" role="alert">		
			<strong>{capitalize(props.aleart.type) }</strong>{ props.aleart.msg} 
			{/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
		</div>
	</div>

  )
}
export default Aleart
