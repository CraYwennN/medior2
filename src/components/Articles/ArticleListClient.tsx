//checks if there is a user in global context if not goes to
//ArticleFetchUser else goes to ShowArticles

'use client';
import { useGlobalContext } from '@/app/Context/globalContext';
import ArticleFetchUser from './ArticleFetchUser';
import ShowArticles from './ShowArticles';
import { Article } from '../Types/Types';

interface IArticleListClientProps {
  Articles: Article[]; // Assuming Articles is an array of Article
  userId: string; // Assuming userId is a number
}

const ArticleListClient: React.FC<IArticleListClientProps> =
 ({ Articles, userId }:IArticleListClientProps) => {
   const { Tuser } = useGlobalContext();
   if (Tuser.name === '') {
     return <ArticleFetchUser Articles={Articles} id={userId} />;
   }
   return <ShowArticles Articles={Articles} />;
 };

export default ArticleListClient;

