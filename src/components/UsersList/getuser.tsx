//function to get user by id
import { User } from '../Types/Types';

// getUser, veškerý fetch by měl jít přes API, takže přesun do složky /pages/api…
// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
async function getUser(userid:unknown): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
  const response = res.json();
  return response;
}
export default getUser;
