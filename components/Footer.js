import React from "react"

const Footer = () => {
    return (
        <footer className="mt-auto bg-white py-6">
            <div className="container">
                <p className="text-center text-black/70">
                    &copy; Copyrights {new Date().getFullYear()}. All rights reserved by{" "}
                    <strong className="text-primary">Plebs Lotto</strong>
                </p>
            </div>
        </footer>
    )
}

export default Footer
