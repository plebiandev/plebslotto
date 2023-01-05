import React from "react"

const Footer = () =>
{
    return (
        <footer className="mt-auto  py-6">
            <div className="container">
                <p className="text-center text-white text-xs">
                    &copy; Copyrights 2022 - { new Date().getFullYear() }. Contact:
                    <a href="https://twitter.com/PlebsLotto" className="text-fuchsia-500">
                        <strong> Plebs Lotto</strong>
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer


