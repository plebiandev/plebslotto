import { contractAddresses, abi } from "../constants"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { useEffect, useState, useRef } from "react"
import { useNotification } from "web3uikit"
import { ethers } from "ethers"
import Jackpot from "./Jackpot"
import PreviousWinner from "./PreviousWinner"
import CountdownTimer from './CountdownTimer'


export default function LotteryEntrance ()
{
    const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis()
    // These get re-rendered every time due to our connect button!
    const chainId = parseInt( chainIdHex )

    const raffleAddress = chainId in contractAddresses ? contractAddresses[ chainId ][ 0 ] : null

    const [ entranceFee, setEntranceFee ] = useState( "0" )
    const [ numberOfPlayers, setNumberOfPlayers ] = useState( "0" )
    const [ recentWinner, setRecentWinner ] = useState( "0" )
    const [ nextDrawTimestamp, setNextDraw ] = useState( "0" )

    const [ countdownTimerTargetTimestamp, setCountdownTimerTargetTimestamp ] = useState( 0 )

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

    const { runContractFunction: getNextDraw } = useWeb3Contract( {
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getLastTimeStamp",
        params: {},
    } )


    function updateUIValues ()
    {


        async function update ()
        {
            const entranceFeeFromCall = ( await getEntranceFee() ).toString()
            const numPlayersFromCall = ( await getPlayersNumber() ).toString()
            const recentWinnerFromCall = await getRecentWinner()
            const nextDrawFromCall = ( await getNextDraw() ).toString()
            setEntranceFee( entranceFeeFromCall )
            setNumberOfPlayers( numPlayersFromCall )
            setRecentWinner( recentWinnerFromCall )
            setNextDraw( nextDrawFromCall )
        }

        if ( isWeb3Enabled )
        {
            update()
        }
    }

    useEffect( () =>
    {
        updateUIValues()
    }, [ isWeb3Enabled ] )

    useEffect( () =>
    {
        updateUIValues()


    }, [ numberOfPlayers ] )


    const audioRef = useRef()

    const handleNewNotification = () =>
    {
        audioRef.current.play();
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

    async function calculateNextDrawTimestamp ()
    {
        const nextDraw = await getNextDraw()
        const nextDrawInt = parseInt( nextDraw )
        const drawInterval = parseInt( '0' )
        const nextDrawTimestamp = nextDrawInt + drawInterval
        return nextDrawTimestamp
    }

    async function updateTimestamp ()
    {
        try
        {
            const nextDrawTimestamp = await calculateNextDrawTimestamp()
            setNextDraw( nextDrawTimestamp )


        } catch ( error )
        {
            console.error( error )
        }
    }

    useEffect( () =>
    {
        updateTimestamp()


    }, [] )



    useEffect( () =>
    {
        const nextDrawInt = parseInt( nextDrawTimestamp )

        // Update the state variable with the updated value of nextDrawInt
        setCountdownTimerTargetTimestamp( nextDrawInt )
    }, [ nextDrawTimestamp ] )



    const propTime = countdownTimerTargetTimestamp + 604500

    // console.log( propTime )
    // console.log( typeof countdownTimerTargetTimestamp )


    return (
        <section className="grow">
            <div className="container">
                { raffleAddress ? (
                    <div className="py-8 space-y-4">


                        <div className="font-bold rounded-lg p-8 ">
                            <h1 class="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-100  to-rose-600"
                            >The Fairest</h1>
                            <h1 class="text-transparent text-6xl bg-clip-text bg-gradient-to-r pb-1 from-indigo-100 to-rose-800"
                            >Lottery Around</h1>
                            <br></br>
                            <p className="text-fuchsia-100 font-thin text-l md:text-2xl">No central authority, just pure crypto goodness</p>
                        </div>


                        <div className="flex-1 w-64 p-8"  >

                            <audio ref={ audioRef } src="/cash-register-purchase.mp3" />

                            <button
                                className=" bg-violet-600 relative hover:bg-fuchsia-500  text-white font-semibold py-3.5 px-5 rounded-md text-sm md:text-base"
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

                                <CountdownTimer targetTime={ propTime } />

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



