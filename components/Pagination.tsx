import Link from 'next/link'
// import styles from '../styles/Pagination.module.css'
import mystyles from '../mystyles/index.module.scss'
import { useMemo } from 'react'

export function Pagination({
  total = 0,
  current = 1,
  basePath = '',
}: {
  total?: number
  current?: number
  basePath?: string
}) {
  const pages = useMemo(() => {
    return Array(
      Math.ceil(total / (Number(process.env.NEXT_PUBLIC_PAGE_LIMIT) || 10))
    )
      .fill({ number: 0, isCurrent: false })
      ?.map((value, index) => {
        const pageNumber = index + 1
        return {
          ...value,
          number: pageNumber,
          isCurrent: current === pageNumber,
        }
      })
  }, [total, current])

  return (
    <nav className={mystyles.pagination}>
      <ul className={mystyles.paginationItems}>
        {pages.map((page) => (
          <li key={page.number} className={mystyles.paginationItem}>
            <Link
                href={`${basePath}/page/${page.number}`}
                type="button"
                className={`${mystyles.paginationButton} ${page.isCurrent ? mystyles._current : ''}`}>
              {/* <a
                type="button"
                className={`${mystyles.paginationButton} ${
                  page.isCurrent ? mystyles._current : ''
                }`}
              > */}
                {page.number}
              {/* </a> */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
