//component fetches the username by id and showsArticles
import { Article, User } from '../Types/Types';
import getUser from '../UsersList/getuser';
import style from './Articlelist.module.css';

interface IArticleFetchUserProps {
  Articles: Article[];
  id: string;
}

async function ArticleFetchUser({ Articles, id }: IArticleFetchUserProps):
Promise<React.ReactElement> {
  const userId:User = await getUser(id);
  return (
    <div className={style.body}>
    <div className={style.header}>
      <h1 className={style.headerH}>Articles</h1>
      <span className={style.headertext}>Author:</span>
      <span className={style.headertext}>{userId.name}</span>
    </div>
  <div className={style.list}>
    {Articles.map((ArticleSkeleton:Article) => (
      <div className={style.article} key={ArticleSkeleton.id}>
        <h2 className={style.articleheader}>{ArticleSkeleton.title}</h2>
        <p className={style.articlebody}>{ArticleSkeleton.body}</p>
        </div>
    ))}
  </div>
  </div>
  );
}
export default ArticleFetchUser;
