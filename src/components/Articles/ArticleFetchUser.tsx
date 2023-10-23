//component fetches the username by id and showsArticles
import { Article, User } from '../Types/Types';
import getUser from '../UsersList/getuser';
import style from './Articlelist.module.css';

// malý písmenka, nejsou to třídy, plete se to s FC
interface IArticleFetchUser {
  Articles: Article[];
  Id:string
}

// komponenta by si neměla sama něco fetchovat, mělo by to sem přijít z nadřízené komponenty
// Název komponenty by spíš měl být UserArticleList
async function ArticleFetchUser({ Articles, Id }:IArticleFetchUser): // const ArticleFetchUser = async ({ Articles, Id }:IArticleFetchUser)
Promise<React.ReactElement> { // o řádek výš, import { ReactElement } from 'react';
  // fetching se dá řešit v hooku (pak není třeba dělat komponentu asynchonní) viz:
  // https://blog.logrocket.com/modern-api-data-fetching-methods-react/#:~:text=In%20practice,%20we%20often%20use
  // odkaz správně funguje jen Chrome, v jiných prohlížečích nutno nascrolovat na odpovídající text
  const userId:User = await getUser(Id);
  return (
    <div className={style.body}>
    <div className={style.header}>
      <h1 className={style.headerH}>Articles</h1>
      <span className={style.headertext}>Author:</span>
      <span className={style.headertext}>{userId.name}</span>
    </div>
      <div className={style.list}>
        {/* Měla tady být komponenta Article */}
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
