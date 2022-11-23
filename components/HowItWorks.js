import React from "react"

const howItWorks = [ "Only 1 MATIC per entry.", "Wait for the draw.", "Check if you've won." ]

const HowItWorks = () =>
{
    return (
        <div className="bg-white rounded-md py-5 pb-6 px-6 border_b_rounded">
            <h3 className="font-semibold text-xl md:text-2xl">How to Play</h3>
            <div className="space-y-5 relative">
                <div className="w-0.5 h-full bg-primary absolute left-[11px] top-0"></div>
                { howItWorks.map( ( eachPoint, i ) => (
                    <div key={ i } className="flex items-center gap-3 relative z-[2]">
                        <div className="w-6 h-6 rounded-full bg-primary text-white flex justify-center items-center text-sm">
                            { i + 1 }
                        </div>
                        <p className="">{ eachPoint }</p>
                    </div>
                ) ) }


            </div>
        </div>
    )
}

export default HowItWorks
