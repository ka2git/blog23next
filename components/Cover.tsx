import mystyles from '../mystyles/index.module.scss'
import { AppMeta } from 'newt-client-js'

export function Cover({ app }: { app: AppMeta }) {
  return (
    <>
      <div className={mystyles.width100}>
        <img
          src={app?.cover?.value}
          alt=""
          width={2000}
          height={1126}
          className={mystyles.radius5}
        />
      </div>
      {/*<div className={mystyles.cover} style={{ backgroundImage: `url(${app.cover.value})` }}>&nbsp;</div>
    */}
    </>

  )
}
