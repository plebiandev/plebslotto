import Link from "next/link"
import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <header className="bg-white">
            <div className="container">
                <nav className="flex justify-between gap-y-2 sm:gap-5 flex-wrap items-center py-4 lg:py-5">
                    <div>
                        <Link href={"/"}>
                            <a className="flex items-center gap-2.5 sm:gap-5">
                                <img
                                    src="/img/logo.png"
                                    alt="Logo"
                                    className="max-w-[30px] sm:max-w-[40px]"
                                />
                                <span className="font-semibold text-[24px] sm:text-[28px] translate-y-1">
                                    Plebs Lotto
                                </span>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <ConnectButton moralisAuth={false} />
                    </div>
                </nav>
            </div>
        </header>
    )
}
