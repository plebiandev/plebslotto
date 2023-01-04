import Link from "next/link"
import { ConnectButton } from "web3uikit"
import styled from 'styled-components'


const NewConnectButton = styled( ConnectButton )`
font-weight: bold;
color: red;
`;



export default function Header ()
{



    return (
        <header>
            <div className="container">
                <nav className="flex justify-between gap-y-2 sm:gap-5 flex-wrap items-center py-4 lg:py-5">
                    <div>

                        <Link href={ "/" }>
                            <a className="flex items-center gap-2.5 sm:gap-5">
                                <img
                                    src="img/logo.png"
                                    alt="Logo"
                                    className="max-w-[130px] sm:max-w-[140px]"

                                />
                                <span className="font-semibold text-[24px] sm:text-[28px] translate-y-1">

                                </span>
                            </a>
                        </Link>
                    </div>
                    <div className="text-fuchsia-100 hover:text-fuchsia-500">
                        <a href="https://docs.plebslotto.io/" target="_blank" rel="noopener noreferrer">
                            Docs
                        </a>
                    </div>

                    <div className="text-fuchsia-100 hover:text-fuchsia-500">
                        <a href="https://docs.plebslotto.io/how-it-works/how-to-play" target="_blank" rel="noopener noreferrer">
                            How it works
                        </a>
                    </div>
                    <div className="text-fuchsia-100 hover:text-fuchsia-500" >
                        <a href="https://docs.plebslotto.io/frequently-asked-questions/faqs" target="_blank" rel="noopener noreferrer">
                            FAQs
                        </a>
                    </div>
                    <div>
                        <NewConnectButton moralisAuth={ false }

                        />
                    </div>
                </nav>
            </div>
        </header>
    )
}
