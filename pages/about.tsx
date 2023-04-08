import { AppMeta, Content } from 'newt-client-js'
import mystyles from 'mystyles/index.module.scss'
import { Layout } from 'components/Layout'
import { BreadCrumb } from 'components/BreadCrumb'
import Head from 'next/head'
import { formatDate } from 'lib/date'
import { Article } from 'types/article'
import { htmlToText } from 'html-to-text'
import Link from 'next/link'
import { appendFile } from 'fs'

export default function About({ app } : {app: AppMeta }) {
  return (
    <>
      <Head>
        <title>このサイトについて</title>
        <meta name="description" content="Aboutページのデスクリプションです。" />
      </Head>
      <Layout app={app}>
        <main className={mystyles.containerArticle}>
        <BreadCrumb
            lists={[
              {
                name: "HOME",
                path: "/",
              },
              {
                name: "このサイトについて",
                path: "about",
              },
            ]}
          />
        
          <h1 className={`${mystyles.mt5} ${mystyles.textCenter}`}>このサイトについて</h1>
          <p className={mystyles.mt5}>このサイトの説明の本文です。</p>
        </main>
        </Layout>
    </>
  )
}