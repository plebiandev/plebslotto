import { contractAddresses, abi } from "../constants"
// dont export from moralis when using react
import { useMoralis, useWeb3Contract } from "react-moralis"
import { useEffect, useState } from "react"
import { useNotification } from "web3uikit"
import { ethers } from "ethers"
import HowItWorks from "./HowItWorks"
import Jackpot from "./Jackpot"
import PreviousWinner from "./PreviousWinner"

export default function LotteryEntrance ()
{
    const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis()
    // These get re-rendered every time due to our connect button!
    const chainId = parseInt( chainIdHex )
    // console.log(`ChainId is ${chainId}`)
    const raffleAddress = chainId in contractAddresses ? contractAddresses[ chainId ][ 0 ] : null

    // State hooks
    // https://stackoverflow.com/questions/58252454/react-hooks-using-usestate-vs-just-variables
    const [ entranceFee, setEntranceFee ] = useState( "0" )
    const [ numberOfPlayers, setNumberOfPlayers ] = useState( "0" )
    const [ recentWinner, setRecentWinner ] = useState( "0" )

    const dispatch = useNotification()

    const {
        runContractFunction: enterRaffle,
        data: enterTxResponse,
        isLoading,
        isFetching,
    } = useWeb3Contract( {
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "enterLotto",
        msgValue: entranceFee,
        params: {},
    } )

    /* View Functions */

    const { runContractFunction: getEntranceFee } = useWeb3Contract( {
        abi: abi,
        contractAddress: raffleAddress, // specify the networkId
        functionName: "getEntranceFee",
        params: {},
    } )

    const { runContractFunction: getPlayersNumber } = useWeb3Contract( {
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getNumberOfPlayers",
        params: {},
    } )

    const { runContractFunction: getRecentWinner } = useWeb3Contract( {
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getRecentWinner",
        params: {},
    } )

    async function updateUIValues ()
    {
        // Another way we could make a contract call:
        // const options = { abi, contractAddress: raffleAddress }
        // const fee = await Moralis.executeFunction({
        //     functionName: "getEntranceFee",
        //     ...options,
        // })
        const entranceFeeFromCall = ( await getEntranceFee() ).toString()
        const numPlayersFromCall = ( await getPlayersNumber() ).toString()
        const recentWinnerFromCall = await getRecentWinner()
        setEntranceFee( entranceFeeFromCall )
        setNumberOfPlayers( numPlayersFromCall )
        setRecentWinner( recentWinnerFromCall )
    }

    useEffect( () =>
    {
        if ( isWeb3Enabled )
        {
            updateUIValues()
        }
    }, [ isWeb3Enabled ] )
    // no list means it'll update everytime anything changes or happens
    // empty list means it'll run once after the initial rendering
    // and dependencies mean it'll run whenever those things in the list change

    // An example filter for listening for events, we will learn more on this next Front end lesson
    // const filter = {
    //     address: address,
    //     topics: [
    //         // the name of the event, parnetheses containing the data type of each event, no spaces
    //         utils.id("RaffleEnter(address)"),
    //     ],
    // }

    const handleNewNotification = () =>
    {
        dispatch( {
            type: "info",
            message: "Success! You have entered the lotto!",
            title: "Transaction Notification",
            position: "topR",
            icon: "bell",
        } )
    }

    const handleSuccess = async ( tx ) =>
    {
        try
        {
            await tx.wait( 1 )
            updateUIValues()
            handleNewNotification( tx )
        } catch ( error )
        {
            console.log( error )
        }
    }

    return (
        <section className="grow">
            <div className="container">
                { raffleAddress ? (
                    <div className="py-8 space-y-4">


                        <div class="font-bold rounded-lg p-8 ">
                            <h1 class="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-100  to-rose-600"
                            >The Fairest</h1>
                            <h1 class="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-100 to-rose-800"
                            >Lottery Around</h1>
                            <br></br>
                            <p className="text-fuchsia-100 font-thin text-l md:text-2xl">No central authority, just pure crypto goodness</p>



                        </div>






                        <div class="flex-1 w-64 p-8"  >


                            <button
                                className="bg-fuchsia-500 relative hover:bg-primary-dark text-white font-semibold py-3.5 px-5 rounded-md text-sm md:text-base"
                                onClick={ async () =>
                                    await enterRaffle( {
                                        // onComplete:
                                        // onError:
                                        onSuccess: handleSuccess,
                                        onError: ( error ) => console.log( error ),
                                    } )
                                }
                                disabled={ isLoading || isFetching }
                            >
                                { isLoading || isFetching ? (
                                    <div className="animate-spin spinner-border h-6 w-6 border-b-2 rounded-full"></div>
                                ) : (
                                    "PLAY for 1 MATIC"
                                ) }
                            </button>






                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-[55%,auto] gap-4">

                            <div className="space-y-4">
                                <Jackpot numberOfPlayers={ numberOfPlayers } />
                                <PreviousWinner recentWinner={ recentWinner } />

                            </div>


                        </div>


                    </div>
                ) : (
                    <div>Please connect your wallet to Polygon </div>
                ) }
            </div>
        </section>
    )
}
