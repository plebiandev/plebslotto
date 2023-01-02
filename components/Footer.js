import React from "react"

const Footer = () =>
{
    return (
        <footer className="mt-auto  py-6">
            <div className="container">
                <p className="text-center text-white text-xs">
                    &copy; Copyrights 2022 - { new Date().getFullYear() }. All rights reserved by{ " " }
                    <strong className="text-fuchsia-500">Plebs Lotto</strong>
                </p>
            </div>
        </footer>
    )
}

export default Footer
