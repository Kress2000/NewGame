import React from "react"



export default function Square({value, onClick}){
    
    
    return(
        <button
        value={value}
        onClick={onClick}
        className="btn btn-dark  squareBtn text-white"
        >
           {value}
        </button>
        )
}