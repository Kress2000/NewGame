import React from "react"
import Square from "./Square"
//import "nanoid"



export default function Board({squares}){
 
   

    return(
        <div className ="board">
           { squares.mapp((square, i) => (<Square
                                        value={square} 
                                        key={i}
                                      //  onClick={() => onClick(i)} 
                                     />
                                     )
                            )
            }
        </div>
    )
}