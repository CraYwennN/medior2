import ArticleListClient from './ArticleListClient';
import GetArticles from './GetArticles';

interface IArticleList {
  userId:string
}

async function ArticleList({ userId }:IArticleList): Promise<React.ReactElement> {
  try {
    const Articles = await GetArticles(userId);

    if (Array.isArray(Articles)) {
      return (
        <ArticleListClient Articles = {Articles} userId={userId} />
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
