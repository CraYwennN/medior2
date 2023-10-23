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
  const { Tuser } = useGlobalContext(); // const { Tuser: { name } } = useGlobalContext();
  // Pokud by v globálním kontextu byla defaultní hodnota undefined, tak by ses ptal jen na TUsera
  if (Tuser.name === '') { // if (!name), ale spíš se ptal na id
    return <ArticleFetchUser Articles = {Articles} Id={userId} />;
  }
  return <ShowArticles Articles={Articles} />;
// řekl bych žy by tady na to stačila jen jedna komponenta.
// Pokud by byl uložený uset, tak by fetchovala
};

export default ArticleListClient;
