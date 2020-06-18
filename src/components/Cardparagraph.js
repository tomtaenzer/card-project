import React from "react";

import './Cardparagraph.css'
import Remarkfield from "./Remarkfield";



export default function Cardparagraph(props){
    return (
        <div className="cardparagraph">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
            <Remarkfield className='remarksfield' />
    </div>
    );
}