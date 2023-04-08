import styles from '../../styles/Search.module.css'
import mystyles from '../../mystyles/index.module.scss'
import { AppMeta, Content } from 'newt-client-js'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import { Layout } from '../../components/Layout'
import { fetchApp, fetchArticles } from '../../lib/api'
import { Article } from '../../types/article'
import { htmlToText } from 'html-to-text'

export default function Search({ app }: { app: AppMeta }) {
  const router = useRouter()
  const { q, page } = router.query

  const [isLoading, setIsLoading] = useState(false)
  const [articles, setArticles] = useState<(Content & Article)[]>([])
  const [total, setTotal] = useState<number>(0)

  const _page = useMemo(() => {
    return Number(page) || 1
  }, [page])

  useEffect(() => {
    ;(async () => {
      if (typeof q !== 'string' || q === '') {
        return
      }
      const { articles, total } = await fetchArticles({
        search: q,
        page: _page,
        limit: 100,
      })
      setArticles(articles)
      setTotal(total)
      setIsLoading(true)
    })()
  }, [q, _page, router])

  return (
    <Layout app={app}>
      <Head>
        <title>{app?.name || app?.uid || ''}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mystyles.containerArticle}>
        {articles.length > 0 ? (
          <div>
            <p>
              {/* Found {total} results for your search */}
              {total}件の検索結果
            </p>
            <div className={mystyles.searchResults}>
              {articles.map((article) => (
                <article key={article._id} className={mystyles.searchArticle}>
                  <Link href={`/article/${article.slug}`} className={mystyles.searchArticleLink}>
                    
                      <h2 className={mystyles.searchArticleTitle}>{article.title}</h2>
                      <p className={mystyles.searchArticleDescription}>
                        {htmlToText(article.body, {
                          selectors: [{ selector: 'img', format: 'skip' }],
                        })}
                      </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        ) : (
          isLoading && (
            <div className={mystyles.searchEmpty}>
              <div className={mystyles.searchEmptyEmoji}>😵</div>
              <h1 className={mystyles.searchEmptyTitle}>Nothing found</h1>
              <p className={mystyles.searchEmptyDescription}>
                検索ワードに一致するページはありませんでした。
                <br />
                別のワードで再度検索してみてください。
              </p>
            </div>
          )
        )}
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const app = await fetchApp()
  return {
    props: {
      app,
    },
  }
}
