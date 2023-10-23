import { ArticlesType } from '../Types/Types';

//async function to fetch Articles by the users id
async function GetArticles(userId: unknown): Promise<ArticlesType> {
  // tady by to mělo být v rtay a v případě catch vracet error
  // a nebylo by třeba typovat chybu v nadřízeném elementu
  const articlesUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const res = await fetch(articlesUrl);
  // if (res.ok) { … tady to zhavaruje při 404, 500 …
  const response = res.json();
  // tasdy by měla být resolvení do správného typu ArticlesType
  return response;
}

// Dva řádky na konci?
// jenom .ts
// proč velké písmeno G, proč ne arrow function?
export default GetArticles;
