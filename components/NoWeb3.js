import React from "react"
import { ConnectButton } from "web3uikit"
import { css } from '@emotion/react'



const CustomConnectButton = () => (
    <ConnectButton className="bg-red-500 rounded-full text-white p-4 font-bold" />
);


const NoWeb3 = () =>
{
    return (

        <section className="grow">

            <div className="container">

                <div className="py-8 space-y-4">

                    <div className="font-bold rounded-lg p-8 ">
                        <h1 class="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-100  to-rose-600"
                        >The Fairest</h1>
                        <h1 class="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-100 to-rose-800"
                        >Lottery Around</h1>
                        <br></br>
                        <p className="text-fuchsia-100 font-thin text-l md:text-2xl">No central authority, just pure crypto goodness</p>

                    </div>

                    <div className="flex-1 w-64 p-8"  >

                        <CustomConnectButton moralisAuth={ false } />

                    </div>

                    <div className="font-bold rounded-lg p-8 ">

                        <p className="text-fuchsia-100 font-thin text-l md:text-2xl">To play, connect your Web 3 wallet of choice.</p>

                    </div>





                </div>


            </div>

        </section>

    )
}

export default NoWeb3
