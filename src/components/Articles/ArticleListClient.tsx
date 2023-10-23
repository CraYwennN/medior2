//checks if there is a user in global context if not goes to
//ArticleFetchUser else goes to ShowArticles
'use client';
import { useGlobalContext } from '@/app/Context/globalContext';
import ArticleFetchUser from './ArticleFetchUser';
import ShowArticles from './ShowArticles';
import { Article } from '../Types/Types';

interface IArticleFetchUserProps {
  Articles: Article[];
  userId:string
}

const ArticleListClient = ({ Articles, userId }:IArticleFetchUserProps): React.JSX.Element => {
  const { Tuser } = useGlobalContext();
  if (Tuser.name === '') {
    return <ArticleFetchUser Articles = {Articles} Id={userId} />;
  }
  return <ShowArticles Articles={Articles} />;
};

export default ArticleListClient;

