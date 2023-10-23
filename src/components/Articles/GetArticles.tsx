//async function to fetch Articles by the users id
async function GetArticles(userId:string): Promise<unknown> {
  const articlesUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const res = await fetch(articlesUrl);
  const response = res.json();
  return response;
}

export default GetArticles;

