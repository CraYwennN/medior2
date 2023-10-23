//function to get user by id
import { User } from '../Types/Types';

async function getUser(userid:unknown): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
  const response = res.json();
  return response;
}
export default getUser;
