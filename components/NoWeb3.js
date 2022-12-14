import React from "react"
import { ConnectButton } from "web3uikit"
import styled from 'styled-components'



const CustomConnectButton = styled( ConnectButton )`
  background-color: red;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  padding: 10px;
`;

const NoWeb3 = () =>
{
    return (

        <section className="grow">

            <div className="container">

                <div className="py-8 space-y-4">

                    <div className="font-bold rounded-lg p-8 ">
                        <h1 class="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-100  to-rose-600"
                        >The Fairest</h1>
                        <h1 class="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-100 to-rose-800 pb-1"
                        >Lottery Around</h1>
                        <br></br>
                        <p className="text-fuchsia-100 font-thin text-l md:text-2xl">No central authority, just pure crypto goodness</p>
                        <br></br>
                        <br></br>
                        <p className="text-fuchsia-100 font-thin text-l md:text-2xl">Connect your wallet to play!</p>


                    </div>

                </div>


            </div>

        </section>

    )
}

export default NoWeb3
