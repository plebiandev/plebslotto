import React from "react"

const PreviousWinner = ({ recentWinner }) => {
    return (
        <div>
            <div className="bg-white rounded-md py-5 pb-6 px-6 border_b_rounded">
                <h3 className="font-semibold text-xl md:text-2xl">Previous Winner:</h3>
                <div className="mt-3 overflow-x-auto">
                    <p>{recentWinner === "0" ? "- - - " : recentWinner}</p>
                </div>
            </div>
        </div>
    )
}

export default PreviousWinner
