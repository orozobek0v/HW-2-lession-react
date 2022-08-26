import React from 'react'
import "./image.css"
import htmlImg from "../img/html5.png"
import cssimg from "../img/css.png"
import jsimg from '../img/js.png'
export default function image() {
  return (
    <div>
      <img src={htmlImg} alt=""/>
      <img src={cssimg} alt=""/>
      <img src={jsimg} alt=""/>
    </div>
  )
}
