import React from "react"
import { useERC20Balances } from "react-moralis"



const CurrentNumberOfPlayer = ( { numberOfPlayers } ) =>
{
    return (
        <div>
            <div className="text-fuchsia-100 rounded-md py-5 pb-6 px-6 ">
                <h3 className="font-semibold text-xl md:text-2xl">
                    Jackpot { numberOfPlayers } MATIC
                </h3>
                <br></br>
                <p className="font-medium text-l md:text-2xl">Next draw</p>

                <p> Monday 12 December 2022</p>
            </div>
        </div>
    )
}

export default CurrentNumberOfPlayer
