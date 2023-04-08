import { AppMeta } from 'newt-client-js'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
// import styles from '../styles/Header.module.css'

// import mystyles from '../mystyles/globals.scss'
import mystyles from '../mystyles/index.module.scss'
import Image from 'next/image'

import Nav from './Nav'


export function Header({ app }: { app: AppMeta }): JSX.Element {
  const router = useRouter()
  const { q } = router.query
  const searchRef = useRef<HTMLInputElement>(null)

  const [searchText, setSearchText] = useState(q || '')

  const focus = useCallback(() => {
    if (searchRef.current) {
      searchRef.current.focus()
    }
  }, [searchRef])

  useEffect(() => {
    if (q) {
      setSearchText(q)
    }
  }, [q])

  return (
    <header className={mystyles.header}>
      <div className={mystyles.headerInnerWrap}>
        <div>
          <Link href="/">
            SiteLogo
          </Link>
        </div>
      
        <div className={mystyles.searchAndNavWrap}>

            <div className={mystyles.search}>
              <a
                type="button"
                className={mystyles.searchButton}
                onClick={focus}
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275a.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0a6.75 6.75 0 0 0-13.5 0Z"/>
              </svg>
                {/* <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                  <path
                    d="M9.3890873 1.6109127c1.81744 1.81743998 2.0970461 4.59036739.8388184 6.7018035l3.3116969 3.3126728c.3547755.3547755.3257954.9589604-.0647289 1.3494847-.3626297.3626297-.9094871.4135198-1.2698126.1348865l-.0796721-.0701576-3.22015474-3.21985629C6.7465078 11.5258295 3.60410194 11.3822765 1.6109127 9.3890873c-2.1478836-2.14788361-2.1478836-5.63029099 0-7.7781746 2.14788361-2.1478836 5.63029099-2.1478836 7.7781746 0zM2.95984943 2.95984943c-1.40288642 1.40288642-1.40288642 3.67741472 0 5.08030114 1.40288642 1.40288642 3.67741472 1.40288642 5.08030114 0 1.40288642-1.40288642 1.40288642-3.67741472 0-5.08030114-1.40288642-1.40288642-3.67741472-1.40288642-5.08030114 0z"
                    fillRule="nonzero"
                  />
                </svg> */}
              </a>
              <form action="/search">
                <div className={mystyles.searchInput}>
                  <input
                    ref={searchRef}
                    name="q"
                    type="search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="検索する"
                  />
                </div>
              </form>
            </div>

          <div className={mystyles.headerNavWrap}>
            <Nav />
          </div>

        </div>

      </div>
    </header>
  )
}
