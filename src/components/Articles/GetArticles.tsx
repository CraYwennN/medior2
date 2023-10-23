import { ArticlesType } from '../Types/Types';

//async function to fetch Articles by the users id
async function GetArticles(userId:unknown): Promise<ArticlesType> {
  const articlesUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const res = await fetch(articlesUrl);
  const response = res.json();
  return response;
}

export default GetArticles;

