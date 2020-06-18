import React from "react";
import './Card.css'
import Cardparagraph from "./Cardparagraph";
import Cardpicture from "./Cardpicture";



export default function Card(props){
    return ( <article className="card">
        <Cardparagraph title={props.content.title} text={props.content.text} />
        <Cardpicture imageSource={props.content.imageSource} />


    </article> );




}