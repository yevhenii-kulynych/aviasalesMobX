import React from "react";
import { Button } from "react-bootstrap";
import "./OwnButton.css";


const OwnButton = ({ price, handleShow }) => {

    return (
        
        <Button variant="warning" onClick={ handleShow }>Купить за { price }</Button>
    )
}

export default OwnButton;