import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/ArticleCard.module.css'

import mystyles from '../mystyles/index.module.scss'

import { formatDate } from '../lib/date'
import { Content } from 'newt-client-js'
import { Article } from '../types/article'
import { useMemo } from 'react'

export function ArticleCard({ article }: { article: Content & Article }) {
  const authorName = useMemo(() => {
    return article.author?.fullName || 'NO NAME'
  }, [article])

  return (
    <Link href={`/article/${article.slug}`} className={mystyles.block}>
        <div>
          {article.coverImage ? (
            <Image
              src={article?.coverImage?.src}
              alt={article?.coverImage?.altText}
              className={mystyles.radius5}
              width={343}
              height={229}
            />
          ) : (
            <div className={styles.Article_EyecatchEmpty}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="#CCCCCC"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
              </svg>
            </div>
          )}
        </div>
        <div>
          <div className={`${mystyles.sideBySideAll} ${mystyles.mt2}`}>
          <time
            dateTime={formatDate(article._sys.createdAt, 'yyyy年M月d日')}
            className={mystyles.dateItem}>
            {formatDate(article._sys.createdAt, 'yyyy年M月d日')}
          </time>

            {/* <time dateTime={formatDate(article._sys.createdAt)}
            className={mystyles.dateItem}>
              {formatDate(article._sys.createdAt)}
            </time> */}
            <ul>
              {article?.tags?.map((tag) => (
                <li key={tag._id} className={mystyles.tagItem}>#{tag.name}</li>
              ))}
            </ul>
          </div>

          <h3 className={`${mystyles.mt2} ${mystyles.articleCardTitle}`}>{article.title}</h3>
          {/*
          <div className={styles.Article_Author}>
            {article.author?.profileImage ? (
              <img
                src={article.author.profileImage.src}
                alt=""
                width="32"
                height="32"
              />
            ) : (
              <div className={styles.Article_AuthorEmpty}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="#CCCCCC"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            )}
            <div className={styles.Article_AuthorData}>
              <span>{authorName}</span>
              <time dateTime={formatDate(article._sys.createdAt)}>
                {formatDate(article._sys.createdAt)}
              </time>
            </div>
          </div>
          */}
        </div>
    </Link>
  )
}
