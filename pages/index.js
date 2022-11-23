import Head from "next/head"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"
import { useMoralis } from "react-moralis"
import Footer from "../components/Footer"

const supportedChains = [ "137" ]

export default function Home ()
{
    const { isWeb3Enabled, chainId } = useMoralis()

    return (
        <div>
            <Head>
                <title>Plebs Lotto</title>
                <meta
                    name="description"
                    content="Play to win crypto"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-screen flex flex-col">
                <Header />
                { isWeb3Enabled ? (
                    <>
                        { supportedChains.includes( parseInt( chainId ).toString() ) ? (
                            <LotteryEntrance />
                        ) : (
                            <div className="grow flex justify-center items-center">
                                <div className="bg-white p-6 rounded-lg text-center space-y-2">
                                    <p className="text-xl font-semibold">
                                        Please switch to a supported chainId.
                                    </p>
                                    <p className="">
                                        The supported Chain Ids are:{ " " }
                                        { `${ supportedChains.join( ", " ) }` }
                                    </p>
                                </div>
                            </div>
                        ) }
                    </>
                ) : (
                    <div className="grow flex justify-center items-center">
                        <div className="bg-white p-6 text-xl font-semibold rounded-lg">
                            Please connect to a Wallet
                        </div>
                    </div>
                ) }
                <Footer />
            </div>
        </div>
    )
}
