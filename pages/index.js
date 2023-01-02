import Head from "next/head"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"
import { useMoralis } from "react-moralis"
import Footer from "../components/Footer"
import NoWeb3 from "../components/NoWeb3"

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
            <div className="min-h-screen flex flex-col ">
                <Header />
                { isWeb3Enabled ? (
                    <>
                        { supportedChains.includes( parseInt( chainId ).toString() ) ? (
                            <LotteryEntrance />
                        ) : (
                            <div className="grow flex justify-center items-center">
                                <div className="bg-white p-6 rounded-lg text-center space-y-2">
                                    <p className="text-xl font-semibold">
                                        Please switch to the Polygon Network.
                                    </p>
                                    <p className="">
                                        The supported Chain is Polygon ID:{ " " }
                                        { `${ supportedChains.join( ", " ) }` }
                                    </p>
                                </div>
                            </div>
                        ) }
                    </>
                ) : (
                    <NoWeb3 />
                ) }
                <Footer />
            </div>
        </div>
    )
}
