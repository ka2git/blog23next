import Link from "next/link";
// import breadCrumbStyles from "./styles/components/BreadCrumb.module.scss";
import mystyles from '../mystyles/index.module.scss'

type Props = {
  lists: {
    name: string;
    path?: string;
  }[];
};

export const BreadCrumb = ({ lists }: Props) => {
  return (
    <ol className={mystyles.breadCrumbList} aria-label="breadcrumb">
      {lists?.map(({ name = "ホーム", path = "/" }, index) => (
        <li className={mystyles.breadCrumbItem} key={index}>
        {/* // 最後の要素以外は項目の右に 「>」 マークを表示させる。 */}
          {lists.length - 1 !== index ? (
            <Link href={path} className={mystyles.breadCrumbNext}>
              {name}
            </Link>
          ) : (
            <span aria-current="page">{name}</span>
          )}
        </li>
      ))}
    </ol>
  );
};