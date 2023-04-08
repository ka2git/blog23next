import { AppMeta } from 'newt-client-js'
import { PropsWithChildren } from 'react'
// import styles from '../styles/Layout.module.css'
import mystyles from '../mystyles/index.module.scss'

import { Footer } from './Footer'
import { Header } from './Header'

export function Layout({
  app,
  children,
}: PropsWithChildren<{
  app: AppMeta
}>): JSX.Element {
  return (
    <>
      <Header app={app} />
      <div className={mystyles.containerMain}>
        {children}
      </div>
      <Footer app={app} />
    </>
  )
}
