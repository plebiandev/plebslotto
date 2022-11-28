import React from "react"
import { useERC20Balances } from "react-moralis"



const CurrentNumberOfPlayer = ( { numberOfPlayers } ) =>
{
    return (
        <div>
            <div className="bg-white rounded-md py-5 pb-6 px-6 border_b_rounded">
                <h3 className="font-semibold text-xl md:text-2xl">
                    Next jackpot: { numberOfPlayers } MATIC
                </h3>
            </div>
        </div>
    )
}

export default CurrentNumberOfPlayer
