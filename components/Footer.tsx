import { AppMeta } from 'newt-client-js'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import mystyles from '../mystyles/index.module.scss'

export function Footer({ app }: { app: AppMeta }) {
  return (
    <>
      <footer className={mystyles.footer}>
        <div className={mystyles.footerInner}>
            <div>
              <Link href="/">
                SiteLogo
              </Link>

            </div>
            <ul className={mystyles.footerNav}>
                <li>
                  <Link href="/">
                    メニュー1
                  </Link>
                </li>
                <li>
                  <Link href="/">
                  メニュー2
                  </Link>
                </li>
                <li>
                  <Link href="/">
                  メニュー3
                  </Link>
                </li>
                <li>
                  <Link href="/">
                  メニュー4
                  </Link>
                </li>
                <li>
                  <Link href="/">
                  メニュー5
                  </Link></li>
                <li>
                  <Link href="/">
                  メニュー6
                  </Link>
                </li>
            </ul>
        </div>
      </footer>
      <div className={mystyles.footerCopyright}>&copy; Blog23</div>

      {/* <div className={styles.Footer_Inner}>
        <Link href="/">
          <a href="#" className={styles.SiteName}>
            {app.icon?.type === 'emoji' && (
              <span className={styles.SiteName_Icon}>{app.icon.value}</span>
            )}
            {app.icon?.type === 'image' && (
              <span className={styles.SiteName_Icon}>
                <img src={app.icon.value} alt="" />
              </span>
            )}
            <div className={styles.SiteName_Text}>
              {app.name || app.uid || ''}
            </div>
          </a>
        </Link>
        <div className={styles.Link}>
          <a
            href="https://github.com/Newt-Inc/newt-blog-starter-nextjs"
            rel="noreferrer noopener"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div> */}
    </>
  )
}
