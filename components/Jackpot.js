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
            </div>
        </div>
    )
}

export default CurrentNumberOfPlayer
