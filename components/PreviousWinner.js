import React from "react"

const PreviousWinner = ( { recentWinner } ) =>
{
    return (
        <div>
            <div className="text-fuchsia-100 rounded-md py-5 pb-6 px-6">
                <h3 className="font-semibold text-l ">Last Draw Winner:</h3>
                <div className="mt-3 overflow-x-auto font-normal text-l ">
                    <p>{ recentWinner === "0" ? "- - - " : recentWinner }</p>

                </div>
            </div>
        </div>
    )
}

export default PreviousWinner
