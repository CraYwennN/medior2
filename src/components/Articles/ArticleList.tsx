import ArticleListClient from './ArticleListClient';
import GetArticles from './GetArticles';

interface IArticleList {
  userId:string
}

// komponenta by si neměla sama něco fetchovat, mělo by to sem přijít z nadřízené komponenty
// arrow function
async function ArticleList({ userId }:IArticleList): Promise<React.ReactElement> {
  try {
    const Articles = await GetArticles(userId);

    // tady ten ifík, nevím, zdali bude vůbec fungovat; přes hooky by to bylo lepší
    if (Array.isArray(Articles)) { // tohle typově nikdy nebude pole => Articles.Articles a tohle ano
      return (
        <ArticleListClient Articles = {Articles} userId={userId} /> // <ArticleListClient Articles={Articles.Articles} userId={userId}
      );
    } else {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
  } catch (error) {
    return (
      <div>
        <p>Error: {(error as Error).message}</p>
      </div>
    );
  }
}

export default ArticleList;
