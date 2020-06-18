import React from "react";
import './Cardpicture.css'

export default function Cardpicture(props){
    return <img className="cardimage" src={props.imageSource} alt="" />
}