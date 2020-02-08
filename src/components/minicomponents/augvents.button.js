import React from 'react';
import './styles/augvents.button.scss'

const AugButton = (props) => {
    return ( 
             <button className="book-event"> {props.params.text || "book event"} </button>
     );
}
 
export default AugButton;