import React from "react"
import Board from "./Board"
import {findWinner} from "../helpers"



export default function Game(){
    const [boardArr, setBoardArr] = React.useState([Array(9).fill(null)]);
    const[stepNumber, setStepNumber] = React.useState(0);
    const [isXNext, setIsXNext] = React.useState(true);
    const winner = findWinner(boardArr[stepNumber]);

   function handleClick(i){
        const time = boardArr.slice(0, stepNumber + 1);
        const currentTime = time[stepNumber];
        const squares = [...currentTime]

        
        if(winner || squares[i]){
            return;
         }
        squares[i] = isXNext? "X" : "O"

        setBoardArr ([...time, squares]);
        setStepNumber(time.length)

        setIsXNext (!isXNext);
    }
  const jumpTo = step=>{
        setStepNumber(step);
        setIsXNext (step%2 === 0);

    }

    function  renderMoves(){
            
                boardArr.mapp(move =>{
                    const destination = move? `Got to Move #${move}`: `Got to Start`;
                    
                    return(
                        <li
                        key={move}
                        >
                            <button
                                onClick = {() => jumpTo(move)}
                                className="btn bg-primary btn-lg text-center text-warning fw-bold"
                            >
                                {destination}
                            </button>
                        </li>
                    )
                })
    }
  
    
    return(
        <>
            <h1 className=" h1 d-3 
            text-dark title
            mb-5
            ">
                Tic tac Toe Game
            </h1>
            <Board
                squares = {boardArr[stepNumber]}
                onClick={handleClick}
            />
            <div className="winner-box
            text-dark fw-bold mt-5 p-0"
            >
                <p>
                    { winner? "Winner: " + winner : "Next player: " + (isXNext? "X" : "O" )}
                </p>
                { renderMoves()}
            </div>

        </>
        
    )
}