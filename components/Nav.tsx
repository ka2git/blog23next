import { useState } from 'react'
import Link from 'next/link'
import mystyles from 'mystyles/index.module.scss'

export default function Nav() {

    const [navIsOpen, setNavIsOpen] = useState(false)
    
    const toggleNav = () => {
        setNavIsOpen((prev) => !prev)
    }

    const closeNav = () => {
        setNavIsOpen(false)
    }

    return (
        <nav className={navIsOpen ? mystyles.open : mystyles.close}>
            {navIsOpen && (
                <style jsx global>{`
                    @media (max-width: 743px) {
                        body {
                            overflow: hidden;
                            position: fixed;
                            width: 100%;
                        }
                    }  
                `}
                </style>
            )}

            <button className={mystyles.headerNavButton} onClick={toggleNav}>
                <span className={mystyles.centerBar}></span>
                <span className={mystyles.srOnly}>MENU</span>
            </button>

            <ul className={mystyles.headerNav}>
                <li>
                    <Link href="/" onClick={closeNav}>HOME</Link>
                </li>

                <li>
                    <Link href="/about" onClick={closeNav}>このサイトについて</Link>
                </li>

            </ul>
        </nav>
    )
}